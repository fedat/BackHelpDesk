const boom = require('@hapi/boom');
const { models } = require('../libs/database')

class ModificacionService {
    constructor() {
    }
    async createModificacion(data) {
        const modificacion = await models.Modificacion.create(data);
        return modificacion;
    }

    async getOneModificacion(id) {
        const modificacion = await models.Modificacion.findByPk(id);
        if (!modificacion) {
            throw boom.notFound('admin not found');
        }
        return modificacion;
    }

    async getAllModificacion(id) {
        const rta = await models.Modificacion.findAll(
          {  where: { noTicket: id }}
        );
        return rta;
    }

}
module.exports = ModificacionService;