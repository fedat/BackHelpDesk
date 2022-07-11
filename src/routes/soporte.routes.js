const {getAllSoporte}= require('../controllers/soporte.controller');
const {Router}=require('express');
const passport = require('passport');
const router=Router();

router.get('/:id',
    //passport.authenticate('jwt', { session: false }),
    getAllSoporte);

module.exports = router;