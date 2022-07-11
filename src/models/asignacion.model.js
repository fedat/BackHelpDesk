const { Model, DataTypes, Sequelize } = require('sequelize');
const {SOLICITUD_TABLE}=require('./solicitud.model')
const { FUNCIONARIO_TABLE } = require('./funcionario.model');

const ASIGNACION_TABLE = 'asignacion';
const AsignacionSchema = {
    idAsignacion: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_asignacion',
    },
    idAdministrador: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_administrador',
        unique: false,
        references: {
            model: FUNCIONARIO_TABLE,
            key: 'id_funcionario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    noTicket: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'no_ticket',
        unique: false,
        references: {
            model: SOLICITUD_TABLE,
            key: 'no_ticket'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'fecha_creacion',
        defaultValue: Sequelize.NOW
    },

    estado: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: 'estado',
    },
}

class Asignacion extends Model {
    static associate(models) {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: ASIGNACION_TABLE,
            modelName: 'Asignacion',
            timestamps: false
        }
    }
}


module.exports = { ASIGNACION_TABLE, AsignacionSchema, Asignacion }