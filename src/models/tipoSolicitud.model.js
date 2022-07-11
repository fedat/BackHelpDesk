const { Model, DataTypes } = require('sequelize');
const TIPO_SOLICITUD_TABLE = 'tipo_solicitud';
const TipoSchema = {
    idTipo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_tipo',
    },
    nombreTipo: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre_tipo',
    },
}

class TipoSolcitud extends Model {
    static associate(models) {
        this.hasMany(models.Soporte, {
            as: 'soporte',
            foreignKey: 'id_tipo'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: TIPO_SOLICITUD_TABLE,
            modelName: 'Tipo',
            timestamps: false
        }
    }
}


module.exports = { TIPO_SOLICITUD_TABLE, TipoSchema, TipoSolcitud }