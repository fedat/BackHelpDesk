const boom = require('@hapi/boom');
const { models } = require('../libs/database')

class TipoSolicitudService {
    constructor() {
    }
    async getTipoSolicitud(id) {
        const tipoSolicitud = await models.Tipo.findByPk(id);
        if (!tipoSolicitud) {
            throw boom.notFound('tipo solicitud not found');
        }
        return dependencia;
    }

    async getAllTipoSolicitud() {
        const rta = await models.Tipo.findAll();
        return rta;
    }
}
module.exports = TipoSolicitudService;