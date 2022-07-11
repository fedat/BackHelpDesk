const boom = require('@hapi/boom');
const { models } = require('../libs/database')

class SubSoporteService {
    constructor() {
    }
    async getOneSubSoporte(id) {
        const subSoporte = await models.SubcategoriaSoporte.findByPk(id);
        if (!subSoporte) {
            throw boom.notFound('admin not found');
        }
        return subSoporte;
    }

    async getAllSubSoportes(idSoporte) {
        const rta = await models.SubcategoriaSoporte.findAll({
            where: { idSoporte: idSoporte }
        });
        return rta;
    }
}
module.exports = SubSoporteService;