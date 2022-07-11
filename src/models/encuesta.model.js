const { Model, DataTypes, Sequelize } = require('sequelize');
const {SOLICITUD_TABLE}=require('./solicitud.model')
const ENCUESTA_TABLE = 'encuesta';
const EncuestaSchema = {
    noTicket: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'no_ticket',
        references: {
            model: SOLICITUD_TABLE,
            key: 'no_ticket'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    calificacionCaso: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'calificacion_caso',
    },
    cerrarCaso: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: 'cerrar_caso',
    },
    calificacionTecnico: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'calificacion_tecnico',
    },
    fecha_respuesta: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'fecha_respuesta',
        defaultValue: Sequelize.NOW
    },
}

class Encuesta extends Model {
    static associate(models) {
        
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: ENCUESTA_TABLE,
            modelName: 'Encuesta',
            timestamps: false
        }
    }
}


module.exports = { ENCUESTA_TABLE, EncuestaSchema, Encuesta }