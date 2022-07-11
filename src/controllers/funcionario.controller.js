const FuncionarioService = require('../services/funcionario.service')

const service = new FuncionarioService();
const getAllUsersActive = async (req, res, next) => {
    try {
        const allFuncionario = await service.getAllActiveFuncionario();
        if (allFuncionario) {
            res.json(allFuncionario);
        } else {
            res.status(404).send('no encontrado')
        }
    } catch (error) {
        next(error);
    }
}
const getAllUsersInactive = async (req, res, next) => {
    try {
        const allFuncionario = await service.getAllInactiveFuncionario();
        if (allFuncionario) {
            res.json(allFuncionario);
        } else {
            res.status(404).send('no encontrado')
        }
    } catch (error) {
        next(error);
    }
}

const getAllAdmin = async (req, res, next) => {
    try {
        const allAdministradores = await service.getAdministradores();
        if (allAdministradores) {
            res.json(allAdministradores);
        } else {
            res.status(404).send('no encontrado')
        }
    } catch (error) {
        next(error);
    }
}
const getEmail = async (req, res, next) => {
    try {
        const body = req.body.email;
        const user = await service.findByEmail(body);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('no encontrado')
        }
    } catch (error) {
        next(error);
    }
}

const getUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const funcionario = await service.getOneFuncionario(id);
        if (funcionario) {
            res.json(funcionario);
        } else {
            res.status(404).send('usuario no encontrado')
        }
    } catch (error) {
        next(error);
    }
}

const getUserByCedula = async (req, res, next) => {
    try {
        const { id } = req.params;
        const funcionario = await service.findByCedula(id);
        if (funcionario) {
            res.json(funcionario);
        } else {
            res.status(404).send('usuario no encontrado')
        }
    } catch (error) {
        next(error);
    }
}

const createUser = async (req, res, next) => {
    try {
        const body = req.body;
        var correo = body.email;
        var cedula = body.cedula;
        const valEmail = await service.findByEmail(correo);
        const valCedula = await service.findByCedula(cedula);
        console.log(valEmail);
        console.log(valCedula);
        if(valEmail === null && valCedula === null) {
            const newFuncionario = await service.createFuncionario(body);
            if (newFuncionario) {
                res.status(201).json(newFuncionario);
            } else {
            }
        }else{
            res.status(400).send('no creado');
        }
    } catch (error) {
        next(error);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        await service.deleteFuncionario(id);
        res.status(201).json({ id });
    } catch (error) {
        next(error);
    }
}
const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const funcionario = await service.updateFunciomario(id, body);
        res.json(funcionario);
    } catch (error) {
        next(error);
    }
}

const updatePassword = async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const funcionario = await service.updatePassword(id, body);
        if (funcionario) {
            res.json(funcionario);
        } else {
            res.status(404).send('contraseña no editada')
        }
    } catch (error) {
        next(error);
    }
}
const resetUserPassword = async (req, res, next) => {
    try {
        const { id } = req.params;
        const funcionario = await service.resetPassword(id);
        if (funcionario) {
            res.json(funcionario);
        } else {
            res.status(404).send('contraseña no editada')
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllUsersActive,
    getAllUsersInactive,
    getAllAdmin,
    getUser,
    getUserByCedula,
    createUser,
    deleteUser,
    updateUser,
    getEmail,
    updatePassword,
    resetUserPassword
}