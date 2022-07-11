const boom = require('@hapi/boom');
const { models } = require('../libs/database')
const bcrypt = require('bcrypt');

class FuncionarioService {

    constructor() {
    }
    async createFuncionario(data) {
        const hash = await bcrypt.hash(data.contrasena, 10);
        const funcionario = await models.Funcionario.create({
            ...data,
            contrasena: hash
        });
        delete funcionario.dataValues.contrasena;
        return funcionario;
    }

    async findByEmail(email) {
        const rta = await models.Funcionario.findOne({
            where: { correo_institucional: email }
        });
        return rta;
    }

    async findByCedula(cedula) {
        const rta = await models.Funcionario.findOne({
            where: { cedula: cedula }
        });
        return rta;
    }

    async getOneFuncionario(id) {
        var funcionario = await models.Funcionario.findByPk(id);
        return funcionario;
    }

    async getAllActiveFuncionario() {
        const rta = await models.Funcionario.findAll({
            where: { activo: true }
        }
        );
        rta.sort((a, b) => {
            return a.id - b.id;
        });
        return rta;
    }

    async getAllInactiveFuncionario() {
        const rta = await models.Funcionario.findAll({
            where: { activo: false }
        }
        );
        rta.sort((a, b) => {
            return a.id - b.id;
        });
        return rta;
    }
    async getAdministradores() {
        const rta = await models.Funcionario.findAll({
            where: { administrador: true, activo: true }
        });
        rta.sort((a, b) => {
            return a.id - b.id;
        });
        return rta;
    };

    async getSuperAdministradores() {
        const rta = await models.Funcionario.findAll({
            where: { superadministrador: true }
        });
        rta.sort((a, b) => {
            return a.id - b.id;
        });
        return rta;
    }


    async deleteFuncionario(id) {
        const funcionario = await this.getOneFuncionario(id);
        await funcionario.destroy();
        return { id };
    }

    async updateFunciomario(id, changes) {
        const funcionario = await this.getOneFuncionario(id);
        var rta = {}
        if (changes.administrador || changes.superadministrador) {
            rta = await funcionario.update(changes);
        } else {
            const hash = await bcrypt.hash(changes.cedula, 10);
            rta = await funcionario.update({
                ...changes,
                contrasena: hash
            });
        }
        return rta;
    }

    async updatePassword(id, changes) {
        const funcionario = await this.getOneFuncionario(id);
        const hash = await bcrypt.hash(changes.contrasena, 10);
        const rta = await funcionario.update({
            contrasena: hash
        });
        return rta;
    }
    async resetPassword(id) {
        const funcionario = await this.getOneFuncionario(id);
        const hash = await bcrypt.hash(funcionario.dataValues.cedula, 10);
        const rta = await funcionario.update({
            contrasena: hash
        });
        return rta;
    }

    async updateFuncionarioState(id, state) {
        const funcionario = await this.getOneFuncionario(id);
        const rta = await funcionario.update({
            activo: state
        });
        return rta;
    }

}
module.exports = FuncionarioService;