const AsignacionService = require('../services/asignacion.service');
const service = new AsignacionService();


const getAdminManagerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const admin = await service.getAdminManagerAsignacion(id);
        if(admin){
            res.json(admin);
        } else{
            res.json(null);
        }
    } catch (error) {
        next(error);
    }
}

const getOneAsignacion = async (req, res, next) => {
    try {
        const { id } = req.params;
        const asignacion = await service.getOneAsignacion(id);
        if(asignacion){
            res.json(asignacion)
        }
        else{
            res.status(404).send('asignacion no encontrada')
        }

    } catch (error) {
        next(error);
    }
}

const createAsignacion = async (req, res,next) => {
    try {
        const body = req.body;
        const newAsignacion = await service.crearAsignacion(body);
        res.status(201).json(newAsignacion);
    } catch (error) {
        next(error);
    }
}

const updateAsignacion = async (req, res,next) => {
    try {
        const { id } = req.params;
        const asignacion = await service.updateAsignacion(id);
        res.json(asignacion);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAdminManagerById,
    getOneAsignacion,
    createAsignacion,
    updateAsignacion
}