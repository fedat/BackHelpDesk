const DependenciaService = require('../services/dependencia.service')

const service = new DependenciaService();
const getAllDependencias = async (req, res, next) => {
    try {
        const allDependencias = await service.getAllDependencias();
        res.json(allDependencias)
    } catch (error) {
        next(error);
    }
}
const getDependencia = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dependencia = await service.getOneDependencia(id);
        if (dependencia) {
            res.json(dependencia);
        } else{
            res.status(404).send('no encontrado')
        }
        res.json(dependencia);
    } catch (error) {
        next(error);
    }
}
module.exports = {
    getAllDependencias, getDependencia
}