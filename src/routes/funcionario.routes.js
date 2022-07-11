const { Router } = require('express');
const passport = require('passport');

const { getAllUsersActive,
    getAllUsersInactive,
    getAllAdmin,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    getUserByCedula,
    getEmail,
    updatePassword,
    resetUserPassword
} = require('../controllers/funcionario.controller');
const { createFuncionarioSchema, getFuncionarioSchema, updateFuncionarioSchema } = require('../schemas/funcionario.schema')
const router = Router();
const { checkSuperadminRole, checkAdminRole } = require('../middlewares/auth.handler');
const validatorHandler = require('../middlewares/validator.handler')

router.get('/email',
    passport.authenticate('jwt', { session: false }),
    getEmail);

router.get('/active',
    passport.authenticate('jwt', { session: false }),
    getAllUsersActive);

router.get('/inactive',
    passport.authenticate('jwt', { session: false }),
    getAllUsersInactive);

router.get('/admins',
    passport.authenticate('jwt', { session: false }),
    getAllAdmin);

router.get('/:id',
    validatorHandler(getFuncionarioSchema, 'params'),
    getUser);

router.get('/ced/:id',
    validatorHandler(getFuncionarioSchema, 'params'),
    getUserByCedula);

router.post('/',
    passport.authenticate('jwt', { session: false }),
    validatorHandler(createFuncionarioSchema, 'body'),
    createUser);

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    deleteUser);

router.put('/:id',
    passport.authenticate('jwt', { session: false }),
    validatorHandler(getFuncionarioSchema, 'params'),
    validatorHandler(updateFuncionarioSchema, 'body'),
    updateUser);

router.put('/password/:id',
    passport.authenticate('jwt', { session: false }),
    updatePassword);

router.put('/password/solicitante/:id',
    passport.authenticate('jwt', { session: false }),
    resetUserPassword
    );

module.exports = router;