const { getCantSolEstado, getCantSolDep, getCantSolTipo, getCantAsignaciones, getCantSurveyCase, getCantSurveyTec, getCantSolEstadoByAdmin, getCantSolTipoByAdmin, getCantSolDepByAdmin, getCantSurveyCaseByAdmin, getCantSurveyTecByAdmin } = require('../controllers/chart.controller');
const { Router } = require('express');
const passport = require('passport');
const router = Router();

router.get('/estado',
    passport.authenticate('jwt', { session: false }),
    getCantSolEstado);

router.get('/tipo',
    passport.authenticate('jwt', { session: false }),
    getCantSolTipo);

router.get('/admin/estado/:id',
    passport.authenticate('jwt', { session: false }),
    getCantSolEstadoByAdmin);

router.get('/admin/tipo/:id',
    passport.authenticate('jwt', { session: false }),
    getCantSolTipoByAdmin);

router.get('/dependencia',
    passport.authenticate('jwt', { session: false }),
    getCantSolDep);

router.get('/admin/dependencia/:id',
    passport.authenticate('jwt', { session: false }),
    getCantSolDepByAdmin);

router.get('/asignaciones',
    passport.authenticate('jwt', { session: false }),
    getCantAsignaciones);

router.get('/survey-case',
    passport.authenticate('jwt', { session: false }),
    getCantSurveyCase);

router.get('/survey-tec',
    passport.authenticate('jwt', { session: false }),
    getCantSurveyTec);

router.get('/admin/survey-case/:id',
    passport.authenticate('jwt', { session: false }),
    getCantSurveyCaseByAdmin);

router.get('/admin/survey-tec/:id',
    passport.authenticate('jwt', { session: false }),
    getCantSurveyTecByAdmin);

module.exports = router;