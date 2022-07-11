const { Model, DataTypes, Sequelize } = require('sequelize');
const {SOLICITUD_TABLE}=require('./solicitud.model')
const EVIDENCIA_TABLE = 'evidencia';
const EvidenciaSchema = {
    idEvidencia: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_evidencia',
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
    nombreImagen: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre_imagen',
    },
    url: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'direccion',
        //url
    },
    tipoImagen: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'tipo_imagen',
    },
}

class Evidencia extends Model {
    static associate() {
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: EVIDENCIA_TABLE,
            modelName: 'Evidencia',
            timestamps: false
        }
    }
}


module.exports = { EVIDENCIA_TABLE, EvidenciaSchema, Evidencia }