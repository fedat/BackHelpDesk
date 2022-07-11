const boom = require('@hapi/boom');
const { models } = require('../libs/database')
const SolicitudService = require('./solicitud.service');
const ModificacionService = require('./modificacion.service');
const AsignacionService = require('../services/asignacion.service');
const FuncionarioService = require('../services/funcionario.service');
const { json } = require('body-parser');
const solicitud = new SolicitudService();
const modificacion = new ModificacionService();
const serviceAsign = new AsignacionService();
const funcAsign = new FuncionarioService();
const { sendMail } = require('../utils/email/email')
class EncuestaService {
    constructor() {
    }
    async createEncuesta(data) {
        const encuesta = await models.Encuesta.create(data);
        return encuesta;
    }
    async validarEncuesta(encuesta) {
        const identifier = encuesta.noTicket;
        var asignada = await serviceAsign.getAdminManagerAsignacion(encuesta.noTicket);
        const solicitudData = await solicitud.getOneSolicitud(encuesta.noTicket);

        var reabrirCaso = encuesta.cerrarCaso
        var superAdm = await funcAsign.getSuperAdministradores();
        var surveyCreated = false;
        var message = ""
        var subj = "Caso solucionado no fue cerrado por el usuario"
        message = `la solicitud número ${encuesta.noTicket} con motivo de creación:"${solicitudData.detalle_solicitud}" que respondiste como solucionada, ha pasado ha estado escalado, debidoa que el usuario ${solicitudData.nombre_funcionario} ${solicitudData.apellido_funcionario} , no cerró el caso. Por favor comunicate con el usuario para dar pronta solución \n.`

        if (reabrirCaso === false) {
            await solicitud.updateSolicitudCloseDate(identifier, encuesta.fecha_respuesta);
            await this.createEncuesta(encuesta);
            surveyCreated = true;
        }
        if (reabrirCaso) {
            var captura = await solicitud.screenShotSolicitud(identifier)
            var myModificacion = {
                "noTicket": identifier,
                "capturaSolicitud": JSON.stringify(captura),
                "motivo": "reapertura de caso",
                "detalles": "se reabre el caso debido a que el usuario final decidió no cerrar el caso",
                "fechaAtencion": encuesta.fecha_respuesta
            }
            await solicitud.updateSolicitudState(identifier);
            await modificacion.createModificacion(myModificacion);
            if (asignada === undefined) {
                superAdm.map((correo) => {
                    var sup = correo.dataValues.id
                    sendMail(sup, subj, message);
                })
            } else {
                sendMail(asignada.id_funcionario, subj, message);
            }

        }


        surveyCreated = false;
        return surveyCreated
    }

    async getOneEncuesta(id) {
        const encuesta = await models.Encuesta.findByPk(id);
        if (!encuesta) {
            throw boom.notFound('encuesta not found');
        }
        return encuesta;
    }
    async findBySolicitud(ticket) {
        const rta = await models.Encuesta.findOne({
            where: { noTicket: ticket }
        });
        console.log(rta);
        return rta;
    }
    async getAllEncuesta() {
        const rta = await models.Encuesta.findAll();
        return rta;
    }

    async deleteEncuesta(id) {
        const encuesta = await this.getOneEncuesta(id);
        await encuesta.destroy();
        return { id };
    }

    async updateEncuesta(id, changes) {
        const encuesta = await this.getOneEncuesta(id);
        const rta = await encuesta.update(changes);
        return rta;
    }


}
module.exports = EncuestaService;