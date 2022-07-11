const { Model, DataTypes } = require('sequelize');
const { TIPO_SOLICITUD_TABLE } = require('./tipoSolicitud.model');

const SOPORTE_TABLE = 'soporte';
const SoporteSchema = {
    idSoporte: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_soporte',
    },
    nombreSoporte: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre_soporte',
    },
    idTipo: {
        allowNull: false,
        field: 'id_tipo',
        type: DataTypes.INTEGER,
        unique: false,
        references: {
            model: TIPO_SOLICITUD_TABLE,
            key: 'id_tipo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
}

class Soporte extends Model {
    static associate(models) {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: SOPORTE_TABLE,
            modelName: 'Soporte',
            timestamps: false
        }
    }
}


module.exports = { SOPORTE_TABLE, SoporteSchema, Soporte }