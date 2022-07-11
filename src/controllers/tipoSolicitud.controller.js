const TipoSolicitudService = require('../services/tipoSolicitud.service')

const service = new TipoSolicitudService();
const getAllTipoSolicitud = async (req, res, next) => {
    try {
        const allTipoSolicitud = await service.getAllTipoSolicitud();
        if (allTipoSolicitud) {
            res.json(allTipoSolicitud);
        } else {
            res.status(404).send('usuario no encontrado')
        }
    } catch (error) {
        next(error);
    }
}
const getTipoSolicitud = async (req, res, next) => {
    try {
        const { id } = req.params;
        const tipoSolicitud = await service.getTipoSolicitud(id);
        if (tipoSolicitud) {
            res.json(tipoSolicitud);
        } else {
            res.status(404).send('usuario no encontrado')
        }
    } catch (error) {
        next(error);
    }
}
module.exports={
    getAllTipoSolicitud, getTipoSolicitud
}