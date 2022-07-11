const SubSoporteService = require('../services/subsoporte.service')

const service = new SubSoporteService();
const getAllSubSoporte = async (req, res, next) => {
    try {
        const { id } = req.params;
        const allSubs = await service.getAllSubSoportes(id);
        if (allSubs) {
            res.json(allSubs);
        } else {
            res.status(404).send('usuario no encontrado')
        }
    } catch (error) {
        next(error);
    }
}
module.exports={
    getAllSubSoporte
}