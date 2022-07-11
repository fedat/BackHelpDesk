const boom = require('@hapi/boom');
const { models } = require('../libs/database')

class DependenciaService {
    constructor() {
    }
    async getOneDependencia(id) {
        const dependencia = await models.Dependencia.findByPk(id);
        if (!dependencia) {
            throw boom.notFound('admin not found');
        }
        return dependencia;
    }

    async getAllDependencias() {
        const rta = await models.Dependencia.findAll();
        return rta;
    }
}
module.exports = DependenciaService;