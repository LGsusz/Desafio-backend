'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Permisos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // Permisos.belongsTo(models.Usuarios, { as: 'usuario' });
      Permisos.belongsTo(models.Usuarios)
    }
  }
  Permisos.init({
    permiso: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Permisos'
  })
  return Permisos
}
