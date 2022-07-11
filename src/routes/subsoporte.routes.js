const {getAllSubSoporte}= require('../controllers/subsoporte.controller');
const {Router}=require('express');
const passport = require('passport');
const router=Router();

router.get('/:id',
    //passport.authenticate('jwt', { session: false }),
    getAllSubSoporte);

module.exports = router;