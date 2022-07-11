const { Model, DataTypes, Sequelize } = require('sequelize');

const{SOLICITUD_TABLE}= require('./solicitud.model');
const MODIFICACION_TABLE = 'modificacion';
const ModificacionSchema = {
    idModificacion: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_modificacion',
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
    capturaSolicitud: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'captura_solicitud',
    },
    fechaAtencion: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'fecha_atencion',
        defaultValue: Sequelize.NOW
    },
    motivo: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'motivo',
    },
    detalles: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'detalles',
    },
}

class Modificacion extends Model {
    static associate() {
        
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: MODIFICACION_TABLE,
            modelName: 'Modificacion',
            timestamps: false
        }
    }
}


module.exports = { MODIFICACION_TABLE, ModificacionSchema, Modificacion }