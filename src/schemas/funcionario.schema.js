const Joi = require('joi');

const id = Joi.number().integer();
const nombre= Joi.string().min(3).max(60);
const apellido= Joi.string().min(3).max(60);
const cedula= Joi.string().min(3);
const email = Joi.string().email();
const telefono = Joi.number().integer().min(8);
const admin=Joi.boolean();
const superadmin= Joi.boolean();
const contrasena=Joi.string();
const activo= Joi.boolean();

const createFuncionarioSchema = Joi.object({
    nombre: nombre.required(),
    apellido: apellido.required(),
    cedula: cedula.required(),
    email: email.required(),
    telefono: telefono.required(),
    administrador: admin.required(),
    superadministrador: superadmin.required(),
    contrasena:contrasena.required()

});

const updateFuncionarioSchema = Joi.object({
   nombre: nombre,
    apellido: apellido,
    cedula: cedula,
    email: email,
    telefono: telefono,
    administrador: admin,
    superadministrador: superadmin,
    contrasena:contrasena,
    activo:activo
});

const getFuncionarioSchema = Joi.object({
  id: id.required(),
});

module.exports = { createFuncionarioSchema, updateFuncionarioSchema, getFuncionarioSchema }