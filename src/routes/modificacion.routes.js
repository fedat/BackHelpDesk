const {Router}=require('express');
const{ getAllModificaciones, getModificacion, createModificacion }= require('../controllers/modificacion.controller');

const router=Router();

router.get('/:id',getAllModificaciones);
router.get('/:id', getModificacion);
router.post('/',createModificacion);

module.exports=router;