const ChartService = require('../services/chart.service')

const service = new ChartService();
const getCantSolEstado = async (req, res, next) => {
    try {
        const chart = await service.getCantEstados();
        res.json(chart)
    } catch (error) {
        next(error);
    }
}

const getCantSolTipo = async (req, res, next) => {
    try {
        const chart = await service.getCantTipo();
        res.json(chart)
    } catch (error) {
        next(error);
    }
};
const getCantSolEstadoByAdmin = async (req, res, next) => {
    try {
        const { id } = req.params;
        const chart = await service.getCantEstadosByAdmin(id);
        res.json(chart)
    } catch (error) {
        next(error);
    }
}

const getCantSolTipoByAdmin = async (req, res, next) => {
    try {
        const { id } = req.params;
        const chart = await service.getCantTipoByAdmin(id);
        res.json(chart)
    } catch (error) {
        next(error);
    }
};

const getCantSurveyCase = async (req, res, next) => {
    try {
        const chart = await service.getCantSurveyCase();
        res.json(chart)
    } catch (error) {
        next(error);
    }
}

const getCantSurveyTec = async (req, res, next) => {
    try {
        const chart = await service.getCantSurveyTecni();
        res.json(chart)
    } catch (error) {
        next(error);
    }
}

const getCantSurveyCaseByAdmin = async (req, res, next) => {
    try {
        const { id } = req.params;
        const chart = await service.getCantSurveyCaseByAdmin(id);
        res.json(chart)
    } catch (error) {
        next(error);
    }
}

const getCantSurveyTecByAdmin = async (req, res, next) => {
    try {
        const { id } = req.params;
        const chart = await service.getCantSurveyTecniByAdmin(id);
        res.json(chart)
    } catch (error) {
        next(error);
    }
}
const getCantSolDep = async (req, res, next) => {
    try {
        const chart = await service.getCantDepen();
        res.json(chart)
    } catch (error) {
        next(error);
    }
}

const getCantSolDepByAdmin = async (req, res, next) => {
    try {
        const { id } = req.params;
        const chart = await service.getCantDepenByAdmin(id);
        res.json(chart)
    } catch (error) {
        next(error);
    }
}
const getCantAsignaciones = async (req, res, next) => {
    try {
        const chart = await service.getAsignaciones();
        res.json(chart)
    } catch (error) {
        next(error);
    }
}
module.exports={
    getCantSolEstado,
    getCantSolTipo,
    getCantSolDep,
    getCantAsignaciones,
    getCantSurveyCase,
    getCantSurveyTec,
    getCantSolEstadoByAdmin,
    getCantSolTipoByAdmin,
    getCantSolDepByAdmin,
    getCantSurveyCaseByAdmin,
    getCantSurveyTecByAdmin
}