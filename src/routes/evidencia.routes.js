const { Router } = require('express');
const passport = require('passport');
const { getEvidencias, createEvidencia } = require('../controllers/evidencia.controller');
const { imageUpload } = require('../middlewares/upload.handler')
const router = Router();

router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    getEvidencias);

router.post('/:id',
    passport.authenticate('jwt', { session: false }),
    createEvidencia);

module.exports = router;