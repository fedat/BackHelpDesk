const { boomify } = require('@hapi/boom');
const { models } = require('../libs/database');
const SolicitudService = require('./solicitud.service');
const solicitud = new SolicitudService();
class AsignacionService {

    constructor() {
    }
    async createAsignacion(data) {
        const asignacion = await models.Asignacion.create(data);
        return asignacion;
    }

    async crearAsignacion(data) {
        const noTicket = data.noTicket;
        const hijas = await solicitud.getAllSolicitudBySolicitudPadre(noTicket);
        var bulkHijas = [];
        const asignada = await this.getLastAsignacion(noTicket);
        //si la solicitud no ha sido asignada
        if (asignada===null) {
            //se crea una nueva asignación
            this.createAsignacion(data);
            if (hijas!==[]) {
                //rpor cada id crear obj asignacion para crear
                for (let i = 0; i < hijas.length; i++) {
                    //poner try catch
                    var hijaAsignada = {
                        idAdministrador: data.idAdministrador,
                        noTicket: hijas[i].dataValues.no_ticket,
                        estado: true
                    }
                    bulkHijas.push(hijaAsignada); 
                }
                this.bulkCreateAsignacion(bulkHijas);
            }
        }   
        if (asignada!==null && data.idAdministrador!== asignada.dataValues.idAdministrador)  {
            //cambiar a false estado de la ultima asignación con ese id
            await this.updateAsignacion(noTicket);
            //se crea una nueva asignación
            await this.createAsignacion(data);
            //si tiene hijas
            if ((hijas!==[]) || (hijas!==null) ){
                //cambair a false el estado de la ltima asignación
                for (let i = 0; i < hijas.length; i++) {
                    var reasign=hijas[i].dataValues.no_ticket;
                    await this.updateAsignacion(reasign);
                }
                //crear una nueva asignacion
               for (let i = 0; i < hijas.length; i++) {
                    var hijaAsignada = {
                        idAdministrador: data.idAdministrador,
                        noTicket: hijas[i].dataValues.no_ticket,
                        estado: true
                    }
                    bulkHijas.push(hijaAsignada); 
                }
                this.bulkCreateAsignacion(bulkHijas);
            }
        }
    }

    async bulkCreateAsignacion(data) {
        const asignaciones = models.Asignacion.bulkCreate(data);
        return asignaciones;
    }
    async createChildAsignacioes(data) {
        const asignacion = await models.Asignacion.create(data);
        return asignacion;
    }

    async getOneAsignacion(id) {
        const asignacion = await models.Asignacion.findByPk(id);
        return asignacion;
    }

    async getLastAsignacion(id) {
        const result = await models.Asignacion.findOne({
            where: { noTicket: id },
            order: [['id_asignacion', 'DESC']],
        });
        return result
    }

    async getAllAsignacion() {
        const rta = await models.Asignacion.findAll();
        return rta;
    }
    async deleteAsignacion(id) {
        const asignacion = await models.Asignacion.getOneAsignacion(id);
        await asignacion.destroy();
        return { id };
    }
    async updateAsignacion(id) {
        const asignacion = await this.getLastAsignacion(id);
        const rta = await asignacion.update({ estado: false });
        return rta
    }

    async getAdminManagerAsignacion(id) {
        const result = await models.Solicitud.sequelize.query(`
        select func.id_funcionario,func.nombre_funcionario, func.apellido_funcionario 
        from asignacion as asig
        inner join funcionario as func on func.id_funcionario=asig.id_administrador
        where asig.no_ticket=${id} and asig.estado =true ORDER BY asig.fecha_creacion ASC LIMIT 1;`);
        console.log(result[0][0]);
        return result[0][0];
    }
}
module.exports = AsignacionService;