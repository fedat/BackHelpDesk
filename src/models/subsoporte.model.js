const { Model, DataTypes } = require('sequelize');
const { SOPORTE_TABLE } = require('./soporte.model');

const SUBCATEGORIA_SOPORTE_TABLE = 'subcategoria_soporte';
const SubcategoriaSoporteSchema = {
    idSubcategoria: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_subcategoria',
    },
    idSoporte: {
        allowNull: false,
        field: 'id_soporte',
        type: DataTypes.INTEGER,
        unique: false,
        references: {
            model: SOPORTE_TABLE,
            key: 'id_soporte'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    subcategoria: {
        allowNull: false,
        field: 'subcategoria',
        type: DataTypes.STRING,
    },
}

class SubcategoriaSoporte extends Model {
    static associate(models) {
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: SUBCATEGORIA_SOPORTE_TABLE,
            modelName: 'SubcategoriaSoporte',
            timestamps: false
        }
    }
}


module.exports = { SUBCATEGORIA_SOPORTE_TABLE, SubcategoriaSoporteSchema, SubcategoriaSoporte }