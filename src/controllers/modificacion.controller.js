const ModificacionService = require('../services/modificacion.service');
const service = new ModificacionService();
const AsignacionService = require('../services/asignacion.service');
const serviceAsign = new AsignacionService();
const SolicitudService = require('../services/solicitud.service');
const serviceSol = new SolicitudService();
const { sendMail } = require('../utils/email/email')
const getAllModificaciones = async (req, res, next) => {
    try {
        const { id } = req.params;
        const allModificaciones = await service.getAllModificacion(id);
        if (allModificaciones) {
            res.json(allModificaciones);
        } else {
            res.status(404).send('usuario no encontrado')
        }
    } catch (error) {
        next(error);
    }
}
const getModificacion = async (req, res, next) => {
    try {
        const { id } = req.params;
        const modificacion = await service.getOneModificacion(id);
        if (modificacion) {
            res.json(modificacion);
        } else {
            res.status(404).send('usuario no encontrado')
        }
    } catch (error) {
        next(error);
    }
}

const createModificacion = async (req, res, next) => {
    try {
        const body = req.body;
        const newModificacion = await service.createModificacion(body);
        const subj = "Seguimiento de tu solicitud.";
        if (newModificacion) {
            res.status(201).json(newModificacion);
            var textAsignada = ""
            var textSolucion = ""
            var message = ""
            var asignada = await serviceAsign.getAdminManagerAsignacion(newModificacion.noTicket)
            const solicitud = await serviceSol.getOneSolicitud(newModificacion.noTicket);
            if (asignada === undefined) {
                textAsignada = "La solicitud actualmente no está asignada a ningún funcionario";
                textSolucion = " por el superadministrador"
            } else {
                textSolucion = ` por el funcionario ${asignada.nombre_funcionario} ${asignada.apellido_funcionario}`;
                textAsignada = `la solicitud actualmente está asignada a ${asignada.nombre_funcionario} ${asignada.apellido_funcionario}`
            }
            if (solicitud.estado === 'solucionado') {
                message = `Su solicitud con identificador '${solicitud.no_ticket}', de la dependencia '${solicitud.nombre_dependencia}',  de tipo '${solicitud.nombre_tipo}' 
                con descripción "${solicitud.detalle_solicitud}",
                se encuentra en estado solucionado a la fecha ${newModificacion.fechaAtencion} ${textSolucion}\n
                Detalles: ${newModificacion.detalles}\n
                
                INGRESA AL APLICATIVO Y RESPONDE LA ENCUESTA DE SATISFACCIÓN PARA DAR CIERRE FINAL AL CASO.
                ${textAsignada}.`
            }
            else {
                message = `Su solicitud con identificador '${solicitud.no_ticket}', de la dependencia '${solicitud.nombre_dependencia}',  de tipo '${solicitud.nombre_tipo}' 
                con descripción "${solicitud.detalle_solicitud}",
                ha sido modificada en la fecha ${newModificacion.fechaAtencion} por motivo '${newModificacion.motivo}' y se encuentra en estado: ${solicitud.estado}.
                ${textAsignada}.`
            }
            sendMail(solicitud.id_funcionario, subj, message);
        }

    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllModificaciones,
    getModificacion,
    createModificacion
}