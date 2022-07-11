const boom = require('@hapi/boom');
const { models } = require('../libs/database')

class SolicitudService {
    constructor() {

    }
    async createSolicitud(data) {
        const solicitud = await models.Solicitud.create(data);
        return solicitud;
    }
    async getSolByID(id) {
        const solicitud = await models.Solicitud.findByPk(id);
        return solicitud;
    }
    async screenShotSolicitud(ident) {
        const solicitud = await models.Solicitud.sequelize.query(`select
        sol.solicitud_padre,
        sol.nivel_criticidad,
        tsop.nombre_tipo, 
        sop.nombre_soporte, 
        sub.subcategoria
        from solicitud as sol
        inner join subcategoria_soporte as sub on sub.id_subcategoria= sol.id_subcategoria
        inner join soporte as sop on sop.id_soporte = sub.id_soporte
        inner join tipo_solicitud as tsop on tsop.id_tipo = sop.id_tipo
        where sol.no_Ticket=${ident}`);
        if (!solicitud[0][0]) {
            throw boom.notFound('solicitud not found');
        }
        return solicitud[0][0];
    }
    async getOneSolicitud(ident) {
        const respuesta = {};
        const solicitud = await models.Solicitud.sequelize.query(`select
        sol.no_ticket,
        sol.solicitud_padre,
        sol.estado, 
        sol.nivel_criticidad,
        sol.tiempo_respuesta,
        tsop.nombre_tipo, 
        tsop.id_tipo,
        sop.nombre_soporte, 
        sop.id_soporte,
        sub.subcategoria, 
        sub.id_subcategoria,
        sol.fecha_creacion,
        sol.fecha_cierre,
        sol.detalle_solicitud,
        dep.id_dependencia,
        dep.nombre_dependencia,
        func.id_funcionario,
        func.nombre_funcionario, 
        func.apellido_funcionario, 
        func.telefono_funcionario, 
        func.correo_institucional
        from solicitud as sol
        inner join dependencia as dep on dep.id_dependencia = sol.id_dependencia
        inner join funcionario as func on func.id_funcionario= sol.id_funcionario
        inner join subcategoria_soporte as sub on sub.id_subcategoria= sol.id_subcategoria
        inner join soporte as sop on sop.id_soporte = sub.id_soporte
        inner join tipo_solicitud as tsop on tsop.id_tipo = sop.id_tipo
        where sol.no_Ticket=${ident}`)
        return solicitud[0][0];
    }

    async getOneSolicitudprim(id) {
        const solicitud = await models.Solicitud.findByPk(id);
        if (!solicitud) {
            throw boom.notFound('solicitud not found');
        }
        return solicitud;
    }

    async getAllSolicitudByState(param) {
        const result = await models.Solicitud.sequelize.query(`
        select sol.no_ticket, sol.estado,sol.nivel_criticidad, 
        dep.nombre_dependencia, cat.subcategoria,
		concat(func.nombre_funcionario,' ',func.apellido_funcionario)fullname
        from solicitud as sol inner join dependencia as dep 
        on dep.id_dependencia= sol.id_dependencia 
        inner join subcategoria_soporte as cat on cat.id_subcategoria=sol.id_subcategoria
		left join asignacion as asign on asign.no_ticket=sol.no_ticket and asign.estado='true'
		left join funcionario as func on func.id_funcionario=asign.id_administrador
        where sol.estado like '${param}'
        ORDER BY sol.no_ticket DESC;`);
        return result[0];
    }
    async getAllSolicitud() {
        const rta = await models.Solicitud.findAll();
        return rta;
    }
    async getAllSolicitudByUser(id) {
        const rta = await models.Solicitud.findAll(
            { where: { idFuncionario: id } }
        );
        return rta;
    }
    async getAllSolicitudBySolicitudPadre(id) {
        const rta = await models.Solicitud.findAll(
            {
                attributes: ['no_ticket'],
                where: { solicitudPadre: id }
            }
        );
        return rta;
    }
    async getAllIdSolicitud(id) {
        const rta = await models.Solicitud.findOne(
            {
                attributes: ['no_ticket'],
                where: { noTicket: id }
            }
        );
        return rta;
    }

    async getAllSolicitudesWithNames() {
        const result = await models.Solicitud.sequelize.query(`
        select sol.no_ticket, sol.estado,sol.nivel_criticidad, 
        dep.nombre_dependencia, cat.subcategoria,
		concat(func.nombre_funcionario,' ',func.apellido_funcionario)fullname
        from solicitud as sol inner join dependencia as dep 
        on dep.id_dependencia= sol.id_dependencia 
        inner join subcategoria_soporte as cat on cat.id_subcategoria=sol.id_subcategoria
		left join asignacion as asign on asign.no_ticket=sol.no_ticket and asign.estado='true'
		left join funcionario as func on func.id_funcionario=asign.id_administrador
        ORDER BY sol.no_ticket DESC;`);
        return result[0];
    }

    async getAllSolicitudByStateByAdmin(id, param) {
        const result = await models.Solicitud.sequelize.query(`
        select * from asignacion as asig
        right join solicitud as sol on asig.no_ticket= sol.no_ticket 
        inner join dependencia as dep on sol.id_dependencia=dep.id_dependencia
		inner join subcategoria_soporte as cat on cat.id_subcategoria=sol.id_subcategoria
        where (id_administrador=${id}) and  (sol.estado like '${param}') and (asig.estado=true)
        ORDER BY sol.no_ticket DESC;`);
        return result[0];
    }
    async getAllSolicitudByAdmin(id) {
        const result = await models.Solicitud.sequelize.query(`
        select * from asignacion as asig
        right join solicitud as sol on asig.no_ticket= sol.no_ticket 
        inner join dependencia as dep on sol.id_dependencia=dep.id_dependencia
		inner join subcategoria_soporte as cat on cat.id_subcategoria=sol.id_subcategoria
        where (id_administrador=${id}) and (asig.estado=true)
        ORDER BY sol.no_ticket DESC;`);
        return result[0];
    }
    async getAllChilds(id) {
        const result = await models.Solicitud.sequelize.query(`
        select sol.no_ticket, sol.estado,sol.nivel_criticidad, 
        dep.nombre_dependencia, cat.subcategoria 
        from solicitud as sol inner join dependencia as dep 
        on dep.id_dependencia= sol.id_dependencia 
        inner join subcategoria_soporte as cat on cat.id_subcategoria=sol.id_subcategoria where solicitud_padre=${id}`);
        result[0].sort((a, b) => {
            return a.no_ticket - b.no_ticket;
        });
        console.log(result[0]);
        return result[0];
    }

    async getIdChilds(id) {
        const result = await models.Solicitud.findAll(
            {
                attributes: ['noTicket'],
                where: { solicitudPadre: id }
            }
        )
        return result;
    }

    async updateSolicitud(id, changes) {
        const solicitud = await this.getSolByID(id);
        const rta = await solicitud.update(changes);
        return rta;
    }
    async updateSolicitudCloseDate(id, closeDate) {
        const solicitud = await this.getSolByID(id);
        const rta = await solicitud.update({ fechaCierre: closeDate });
        return rta;
    }
    async updateSolicitudState(id) {
        const solicitud = await this.getSolByID(id);
        const rta = await solicitud.update({ estado: "escalado" });
        return rta;
    }

    async deleteSolicitudPadre(id) {
        const solicitud = await this.getSolByID(id);
        const rta = await solicitud.update({ solicitudPadre: null });
        return rta;
    }


}
module.exports = SolicitudService;