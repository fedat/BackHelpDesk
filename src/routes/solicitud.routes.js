const { Router } = require('express');
const passport = require('passport');
const { getAllSolicitudes,
    getSolicitud,
    getAllChilds,
    createSolicitud,
    updateSolicitud,
    getAllSolicitudesByState,
    getAllSolicitudesGeneralesByAdmin,
    getAllSolicitudesByUser,
    getChildsByFather,
    getAllSolicitudesByStateByAdmin,
    deleteSolPadre } = require('../controllers/solicitud.controller');
const router = Router();
//super
router.get('/estado/general',
    passport.authenticate('jwt', { session: false }),
    getAllSolicitudes);
//borrar
router.get('/fatherchild/:id',
    passport.authenticate('jwt', { session: false }),
    getChildsByFather);
//
router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    getSolicitud);

router.get('/estado/:param',
    passport.authenticate('jwt', { session: false }),
    getAllSolicitudesByState);

//admin
router.get('/admin/:id/estado/general',
    passport.authenticate('jwt', { session: false }),
    getAllSolicitudesGeneralesByAdmin);

router.get('/admin/:id/estado/:param',
    passport.authenticate('jwt', { session: false }),
    getAllSolicitudesByStateByAdmin);

router.get('/childs/:id',
    passport.authenticate('jwt', { session: false }),
    getAllChilds);

router.post('/',
    passport.authenticate('jwt', { session: false }),
    createSolicitud);

router.put('/:id',
    passport.authenticate('jwt', { session: false }),
    updateSolicitud);

router.put('/father/:id',
    passport.authenticate('jwt', { session: false }),
    deleteSolPadre);
//user
router.get('/user/:id',
    passport.authenticate('jwt', { session: false }),
    getAllSolicitudesByUser);
module.exports = router;