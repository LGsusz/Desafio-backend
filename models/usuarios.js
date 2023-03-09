'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Usuarios.hasMany(models.Permisos)
      // Permiso.belongsTo(Usuario, { as: 'usuario' });
      // Usuarios.hasMany(models.Permisos);
    }
  }
  Usuarios.init({
    nombre: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Usuarios'
  })
  return Usuarios
}
