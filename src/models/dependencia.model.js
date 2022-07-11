const { Model, DataTypes } = require('sequelize');

const DEPENDENCIA_TABLE = 'dependencia';
const DependenciaSchema = {
    idDependencia: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_dependencia',
    },
    nombreDependencia: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre_dependencia',
    },
    dependenciaPadre: {
        allowNull: false,
        field: 'dependencia_padre',
        type: DataTypes.INTEGER,
        unique: false,
        references: {
            model: DEPENDENCIA_TABLE,
            key: 'id_dependencia'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
}

class Dependencia extends Model {
    static associate(models) {
        this.hasMany(models.Solicitud, {
            as: 'dependencia',
            foreignKey: 'id_dependencia'
          });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: DEPENDENCIA_TABLE,
            modelName: 'Dependencia',
            timestamps: false
        }
    }
}
module.exports = { DEPENDENCIA_TABLE, DependenciaSchema, Dependencia }