const SolicitudService = require('../services/solicitud.service');
const service = new SolicitudService();
const {sendMail}= require('../utils/email/email')
const getAllSolicitudesByState = async (req, res, next) => {
    const { param } = req.params;
    try {
        const allSolicitudes = await service.getAllSolicitudByState(param);
        if (allSolicitudes) {
            res.json(allSolicitudes);
        } else {
            res.status(404).send('solicitudes no encontradas')
        }
    } catch (error) {
        next(error);
    }
}
const getAllSolicitudes = async (req, res, next) => {
    try {
        const allSolicitudes = await service.getAllSolicitudesWithNames();
        if (allSolicitudes) {
            res.json(allSolicitudes);
        } else {
            res.status(404).send('usuario no encontrado')
        }
    } catch (error) {
        next(error);
    }
}
const getAllSolicitudesByStateByAdmin = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { param } = req.params;
        const allSolicitudes = await service.getAllSolicitudByStateByAdmin(id, param);
        if (allSolicitudes) {
            res.json(allSolicitudes);
        } else {
            res.status(404).send('usuario no encontrado')
        }
    } catch (error) {
        next(error);
    }
}
const getAllSolicitudesGeneralesByAdmin = async (req, res, next) => {
    try {
        const { id } = req.params;
        const allSolicitudes = await service.getAllSolicitudByAdmin(id);
        if (allSolicitudes) {
            res.json(allSolicitudes);
        } else {
            res.status(404).send('usuario no encontrado')
        }
    } catch (error) {
        next(error);
    }
}

const getAllSolicitudesByUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const allSolicitudes = await service.getAllSolicitudByUser(id);
        if (allSolicitudes) {
            res.json(allSolicitudes);
        } else {
            res.status(404).send('usuario no encontrado')
        }
    } catch (error) {
        next(error);
    }
}



const getAllChilds = async (req, res, next) => {
    try {
        const { id } = req.params;
        const allSolicitudes = await service.getAllChilds(id);
        if (allSolicitudes) {
            res.json(allSolicitudes);
        } else {
            res.status(404).send('usuario no encontrado')
        }
    } catch (error) {
        next(error);
    }
}

const getSolicitud = async (req, res, next) => {
    try {
        const { id } = req.params;
        const solicitud = await service.getOneSolicitud(id);
        if (solicitud) {
            res.json(solicitud);
        } else {
            res.status(404).send('solicitud no encontrada')
        }
    } catch (error) {
        next(error);
    }
}

const createSolicitud = async (req, res, next) => {
    try {
        const body = req.body;
        const newSolicitud = await service.createSolicitud(body);
        const subj = "Creación de solicitud exitosa";
        if (newSolicitud) {
            res.status(201).json(newSolicitud);
            const solicitud = await service.getOneSolicitud(newSolicitud.noTicket);
            var message = `Tu solicitud con identificador '${solicitud.no_ticket}', de la dependencia '${solicitud.nombre_dependencia}',  de tipo '${solicitud.nombre_tipo}'
            con descripción "${solicitud.detalle_solicitud}",
            ha sido creada con éxito en la fecha ${solicitud.fecha_creacion} y se encuentra en estado: EN PROCESO.`
            sendMail(newSolicitud.idFuncionario, subj, message);

        }

    } catch (error) {
        next(error.name);
    }
}

const updateSolicitud = async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const solicitud = await service.updateSolicitud(id, body);
        res.json(solicitud)
    } catch (error) {
        next(error);
    }
}

const deleteSolPadre = async (req, res, next) => {
    try {
        const { id } = req.params;
        const solicitud = await service.deleteSolicitudPadre(id);
        res.json(solicitud)
    } catch (error) {
        next(error);
    }
}
//borrar
const getChildsByFather = async (req, res, next) => {
    try {
        const { id } = req.params;
        const allSolicitudes = await service.getIdChilds(id);
        res.json(allSolicitudes)
    } catch (error) {
        next(error);
    }
}
module.exports = {
    getAllSolicitudes,
    getAllSolicitudesByState,
    getAllSolicitudesByStateByAdmin,
    getAllSolicitudesGeneralesByAdmin,
    getAllChilds,
    getSolicitud,
    createSolicitud,
    updateSolicitud,
    getAllSolicitudesByUser,
    getChildsByFather,
    deleteSolPadre
}