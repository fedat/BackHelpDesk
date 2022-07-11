const boom = require('@hapi/boom');
const { models } = require('../libs/database')

class SoporteService {
    constructor() {
    }
    async getOneSoporte(id) {
        const soporte = await models.Soporte.findByPk(id);
        if (!soporte) {
            throw boom.notFound('admin not found');
        }
        return soporte;
    }

    async getAllSoportes(idTipoSolicitud) {
        const rta = await models.Soporte.findAll({
            where: { idTipo: idTipoSolicitud }
        });
        return rta;
    }
}
module.exports = SoporteService;