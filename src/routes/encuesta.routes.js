const {Router}= require('express');
const { getAllEncuestas,getBySolicitudNumber, createEncuesta, updateEncuesta }=require('../controllers/encuesta.controller');
const router=Router();

router.get('/', getAllEncuestas);
router.get('/:id',getBySolicitudNumber);
router.post('/', createEncuesta);
router.put('/:id', updateEncuesta);

module.exports=router