const { Router } = require('express');
const passport = require('passport');
const { getAdminManagerById, getOneAsignacion, createAsignacion, updateAsignacion } = require('../controllers/asignacion.controller');
const router = Router();
//super
router.get('/admin/:id',
    passport.authenticate('jwt', { session: false }),
    getAdminManagerById);

router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    getOneAsignacion);
    
router.get('/antigua/:id',
    passport.authenticate('jwt', { session: false }),
    updateAsignacion);

router.post('/',
    passport.authenticate('jwt', { session: false }),
    createAsignacion);

    module.exports = router;