const boom = require('@hapi/boom');
const { models } = require('../libs/database')

class SolicitudService {
    constructor() {

    }
    async getCantEstados() {
        const result = await models.Solicitud.sequelize.query(`select estado, count(estado) as cantidad
        from solicitud
        where estado in('solucionado','escalado', 'en proceso')
        group by  estado`);
        console.log(result[0]);
        return result[0];
    }

    async getAsignaciones() {
        const result = await models.Solicitud.sequelize.query(`select func.nombre_funcionario, func.apellido_funcionario, count(asig.id_asignacion ) as cantidad
        from asignacion as asig 
        inner join funcionario as func on asig.id_administrador= func.id_funcionario
        where (func.administrador=true) and (asig.estado=true)
        group by func.nombre_funcionario, func.apellido_funcionario`);
        console.log(result[0]);
        return result[0];
    }

    async getCantTipo() {
        const result = await models.Solicitud.sequelize.query(
            `select tsop.nombre_tipo, count(tsop.nombre_tipo) as cantidad
        from solicitud as sol
        inner join subcategoria_soporte as sub on sub.id_subcategoria= sol.id_subcategoria
        inner join soporte as sop on sop.id_soporte = sub.id_soporte
        inner join tipo_solicitud as tsop on tsop.id_tipo = sop.id_tipo
        where tsop.nombre_tipo in('Incidente','requerimiento')
        group by tsop.nombre_tipo`);
        console.log(result[0]);
        return result[0];
    }
    async getCantEstadosByAdmin(id) {
        const result = await models.Solicitud.sequelize.query(`select sol.estado, count(sol.estado) as cantidad
        from solicitud as sol
		inner join asignacion as asig on asig.no_ticket= sol.no_ticket
        where sol.estado in('solucionado','escalado', 'en proceso') and asig.id_administrador=${id} and asig.estado=true
        group by  sol.estado `);
        console.log(result[0]);
        return result[0];
    }
    async getCantTipoByAdmin(id) {
        const result = await models.Solicitud.sequelize.query(
            `select tsop.nombre_tipo, count(tsop.nombre_tipo) as cantidad
            from solicitud as sol
            inner join asignacion as asig on asig.no_ticket= sol.no_ticket
            inner join subcategoria_soporte as sub on sub.id_subcategoria= sol.id_subcategoria
            inner join soporte as sop on sop.id_soporte = sub.id_soporte
            inner join tipo_solicitud as tsop on tsop.id_tipo = sop.id_tipo
            where tsop.nombre_tipo in('Incidente','requerimiento') and asig.id_administrador= ${id} and asig.estado=true
            group by tsop.nombre_tipo`);
        console.log(result[0]);
        return result[0];
    }

    async getCantSurveyCase() {
        const result = await models.Solicitud.sequelize.query(
            `select calificacion_caso, count(calificacion_caso) as cantidad
            from encuesta
            where calificacion_caso in(1,2,3,4,5)
            group by calificacion_caso  order by calificacion_caso`);
        console.log(result[0]);
        return result[0];
    };

    async getCantSurveyTecni() {
        const result = await models.Solicitud.sequelize.query(
            `select calificacion_tecnico, count(calificacion_tecnico) as cantidad
            from encuesta
            where calificacion_tecnico in(1,2,3,4,5)
            group by calificacion_tecnico  order by calificacion_tecnico`);
        console.log(result[0]);
        return result[0];
    }
    async getCantSurveyCaseByAdmin(id) {
        const result = await models.Solicitud.sequelize.query(
            `select calificacion_caso, count(calificacion_caso) as cantidad
            from encuesta 
            inner join solicitud as sol on sol.no_ticket=encuesta.no_ticket
			inner join asignacion as asign on asign.no_ticket= sol.no_ticket
            where calificacion_caso in(1,2,3,4,5) and asign.id_administrador=${id}
            group by calificacion_caso  order by calificacion_caso`);
        console.log(result[0]);
        return result[0];
    };

    async getCantSurveyTecniByAdmin(id) {
        const result = await models.Solicitud.sequelize.query(
            `select calificacion_tecnico, count(calificacion_tecnico) as cantidad
            from encuesta
			inner join solicitud as sol on sol.no_ticket=encuesta.no_ticket
			inner join asignacion as asign on asign.no_ticket= sol.no_ticket
            where calificacion_tecnico in(1,2,3,4,5) and asign.id_administrador=${id}
            group by calificacion_tecnico  order by calificacion_tecnico`);
        console.log(result[0]);
        return result[0];
    }

    async getCantDepen() {
        const result = await models.Solicitud.sequelize.query(
            `select dep.nombre_dependencia, count(sol.no_ticket ) as cantidad
            from dependencia as dep
            left join solicitud as sol on sol.id_dependencia= dep.id_dependencia
            where dep.nombre_dependencia in('Direcci??n General',
            'Oficina Asesora de Planeaci??n',
            'Oficina Asesora Jur??dica',
            'Oficina de Control Interno',
            'Subdirecci??n de Investigaci??n y Producci??n Cient??fica',
            'Grupo de Antropolog??a',
            'Grupo de Historia',
            '??rea funcional de Publicaciones',
            '??rea funcional de Librer??a',
            '??rea funcional de Investigaci??n Arqueol??gica',
            'Subdirecci??n de Gesti??n del Patrimonio',
            'Grupo de Arqueolog??a',
            'Grupo de Patrimonio',
            '??rea funcional de Tecnolog??as aplicadas al Patrimonio y Patrimonio Cultural
            Sumergido',
            'Subdirecci??n de Apropiaci??n y relacionamiento con el ciudadano',
            '??rea funcional de Biblioteca Especializada',
            '??rea funcional de Museograf??a'
            '??rea funcional de Relacionamiento con el Ciudadano',
            'Secretar??a General',
            '??rea funcional de gesti??n de Tesorer??a',
            '??rea funcional de gesti??n de Contabilidad',
            '??rea funcional de gesti??n de Presupuesto',
            '??rea funcional de gesti??n de Talento Humano',
            '??rea funcional de gesti??n de Contratos y Convenios',
            '??rea funcional de gesti??n documental',
            '??rea funcional de Archivo',
            '??rea funcional de Correspondencia',
            '??rea funcional de Almac??n',
            '??rea funcional de Tecnolog??as y Sistemas de Informaci??n')
            group by dep.nombre_dependencia            
            `);
        console.log(result[0]);
        return result[0];
    }

    async getCantDepenByAdmin(id) {
        const result = await models.Solicitud.sequelize.query(
            `
            select dep.nombre_dependencia, count(sol.no_ticket ) as cantidad
                   from dependencia as dep
                   left join solicitud as sol on sol.id_dependencia= dep.id_dependencia
                   inner join asignacion as asig on asig.no_ticket= sol.no_ticket
                   where dep.nombre_dependencia in('Direcci??n General',
                   'Oficina Asesora de Planeaci??n',
                   'Oficina Asesora Jur??dica',
                   'Oficina de Control Interno',
                   'Subdirecci??n de Investigaci??n y Producci??n Cient??fica',
                   'Grupo de Antropolog??a',
                   'Grupo de Historia',
                   '??rea funcional de Publicaciones',
                   '??rea funcional de Librer??a',
                   '??rea funcional de Investigaci??n Arqueol??gica',
                   'Subdirecci??n de Gesti??n del Patrimonio',
                   'Grupo de Arqueolog??a',
                   'Grupo de Patrimonio',
                   '??rea funcional de Tecnolog??as aplicadas al Patrimonio y Patrimonio Cultural
                   Sumergido',
                   'Subdirecci??n de Apropiaci??n y relacionamiento con el ciudadano',
                   '??rea funcional de Biblioteca Especializada',
                   '??rea funcional de Museograf??a'
                   '??rea funcional de Relacionamiento con el Ciudadano',
                   'Secretar??a General',
                   '??rea funcional de gesti??n de Tesorer??a',
                   '??rea funcional de gesti??n de Contabilidad',
                   '??rea funcional de gesti??n de Presupuesto',
                   '??rea funcional de gesti??n de Talento Humano',
                   '??rea funcional de gesti??n de Contratos y Convenios',
                   '??rea funcional de gesti??n documental',
                   '??rea funcional de Archivo',
                   '??rea funcional de Correspondencia',
                   '??rea funcional de Almac??n',
                   '??rea funcional de Tecnolog??as y Sistemas de Informaci??n') and asig.id_administrador=${id} and asig.estado=true
                   group by dep.nombre_dependencia      
            `);
        console.log(result[0]);
        return result[0];
    }
}
module.exports = SolicitudService;