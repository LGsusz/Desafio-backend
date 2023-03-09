'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Accesos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Accesos.belongsTo(
        models.Usuarios, { foreignKey: 'id_usuario' }
      )
    }
  }
  Accesos.init({
    id_usuario: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Accesos'
  })
  return Accesos
}
