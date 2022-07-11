const boom = require('@hapi/boom');
const express = require('express');
const { models } = require('../libs/database')
const path = require('path');
class EvidenciaService {
    constructor() {

    }

    async getEvidenciasById(id) {
        const list = []
        const res = await models.Evidencia.findAll({
            where: { noTicket: id }
        });
        return res;
    }

    async createEvidencia(id, data) {
        const { nombre, url, type } = data;
        const evidencia = await models.Evidencia.sequelize.query(`insert 
        into evidencia(no_ticket, nombre_imagen, direccion, tipo_imagen)
        values('${id}','${nombre}', '${url}', '${type}')`);
        return evidencia;

    }
    async deleteEvidencia() {

    }
}
module.exports = EvidenciaService;