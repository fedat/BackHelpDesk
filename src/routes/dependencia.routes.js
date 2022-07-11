const {getAllDependencias}= require('../controllers/dependencia.controller');
const {Router}=require('express');
const passport = require('passport');
const router=Router();

router.get('/',
    passport.authenticate('jwt', { session: false }),
    getAllDependencias);

module.exports = router;