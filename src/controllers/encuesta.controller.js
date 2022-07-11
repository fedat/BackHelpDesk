const EncuestaService= require('../services/encuesta.service');
const service= new EncuestaService();
const getAllEncuestas = async (req, res, next) => {
    try {
        const allEncuestas = await service.getAllEncuesta();
        if(allEncuestas){
            res.json(allEncuestas);
        }else{
            res.status(404).send('no encontrado')
        }
    } catch (error) {
        next(error);
    }
}

const getEncuesta = async (req, res, next) => {
    try {
        const { id } = req.params;
        const encuesta = await service.getOneEncuesta(id);
        if(encuesta){
            res.json(encuesta);
        }else{
            res.status(404).send('no encontrado')
        }
    } catch (error) {
        next(error);
    }
}

const getBySolicitudNumber = async (req, res, next) => {
    try {
        const { id } = req.params;
        const encuesta = await service.findBySolicitud(id);
        if(encuesta){
            res.json(encuesta);
        }else{
            res.status(404).send('no encontrado')
        }
    } catch (error) {
        next(error);
    }
}

const createEncuesta = async (req, res, next) => {
    try {
        const body = req.body;
        const newEncuesta = await service.validarEncuesta(body);
        res.status(201).json(newEncuesta);
    } catch (error) {
        next(error);
    }
}

const updateEncuesta = async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const encuesta = await service.updateEncuesta(id, body);
        res.json(encuesta)
    } catch (error) {
        next(error);
    }
}
module.exports={
    getAllEncuestas,
    getEncuesta,
    createEncuesta,
    updateEncuesta,
    getBySolicitudNumber
}
