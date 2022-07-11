const { Model, DataTypes, Sequelize } = require('sequelize');

const FUNCIONARIO_TABLE = 'funcionario';
const FuncionarioSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_funcionario',
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre_funcionario',
    },
    apellido: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'apellido_funcionario',
    },
    cedula: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        field: 'cedula_funcionario',
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        field: 'correo_institucional',
    },
    telefono: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: false,
        field: 'telefono_funcionario',
    },
    administrador: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: 'administrador',
    },
    superadministrador: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: 'superadministrador',
    },
    contrasena: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        field: 'contrasena',
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'fecha_creacion',
        defaultValue: Sequelize.NOW
    },
    activo: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        field: 'activo',
    },
}

class Funcionario extends Model {
    static associate(models) {
          this.hasMany(models.Asignacion, {
            as: 'asignacion',
            foreignKey: 'id_administrador'
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: FUNCIONARIO_TABLE,
            modelName: 'Funcionario',
            timestamps: false
        }
    }
}


module.exports = { FUNCIONARIO_TABLE, FuncionarioSchema, Funcionario }