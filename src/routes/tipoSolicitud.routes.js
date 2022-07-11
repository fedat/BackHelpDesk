const {getAllTipoSolicitud}= require('../controllers/tipoSolicitud.controller');
const {Router}=require('express');
const passport = require('passport');
const router=Router();

router.get('/',
    //passport.authenticate('jwt', { session: false }),
    getAllTipoSolicitud);

module.exports = router;