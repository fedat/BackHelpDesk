const { Model, DataTypes, Sequelize } = require('sequelize');
const { FUNCIONARIO_TABLE } = require('./funcionario.model')
const { DEPENDENCIA_TABLE } = require('./dependencia.model');
const { SUBCATEGORIA_SOPORTE_TABLE } = require('./subsoporte.model');


const SOLICITUD_TABLE = 'solicitud';
const SolicitudSchema = {
    noTicket: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'no_ticket',
    },
    solicitudPadre: {
        allowNull: true,
        field: 'solicitud_padre',
        type: DataTypes.INTEGER,
        unique: false,
        references: {
            model: SOLICITUD_TABLE,
            key: 'no_ticket'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    idFuncionario: {
        allowNull: false,
        field: 'id_funcionario',
        type: DataTypes.INTEGER,
        unique: false,
        references: {
            model: FUNCIONARIO_TABLE,
            key: 'id_funcionario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    estado: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'estado',
    },
    idDependencia: {
        allowNull: false,
        field: 'id_dependencia',
        type: DataTypes.INTEGER,
        unique: false,
        references: {
            model: DEPENDENCIA_TABLE,
            key: 'id_dependencia'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    nivelCriticidad: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'nivel_criticidad',
    },
    tiempoRespuesta: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'tiempo_respuesta',
    },
    marcaTemporal: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'fecha_creacion',
        defaultValue: Sequelize.NOW
    },
    fechaCierre: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'fecha_cierre',
    },
    detalleSolicitud: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'detalle_solicitud',
    },
    idSubcategoria: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_subcategoria',
        unique: false,
        references: {
            model: SUBCATEGORIA_SOPORTE_TABLE,
            key: 'id_subcategoria'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
}

class Solicitud extends Model {
    static associate(models) {
        this.hasMany(models.Modificacion, {
            as: 'modificacion',
            foreignKey: 'no_ticket'
        });
        this.hasMany(models.Asignacion, {
            as: 'asignacion',
            foreignKey: 'no_ticket'
        });
        this.hasMany(models.Evidencia, {
            as: 'evidencia',
            foreignKey: 'no_ticket'
        });
        this.hasOne(models.Encuesta, {
            as: 'encuesta',
            foreignKey: 'no_ticket'
          });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: SOLICITUD_TABLE,
            modelName: 'Solicitud',
            timestamps: false
        }
    }
}


module.exports = { SOLICITUD_TABLE, SolicitudSchema, Solicitud }