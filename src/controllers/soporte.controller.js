const SoporteService = require('../services/soporte.service')

const service = new SoporteService();
const getAllSoporte = async (req, res, next) => {
    try {
        const { id } = req.params;
        const allSoporte = await service.getAllSoportes(id);
        if (allSoporte) {
            res.json(allSoporte);
        } else {
            res.status(404).send('usuario no encontrado')
        }
    } catch (error) {
        next(error);
    }
}
module.exports={
    getAllSoporte
}