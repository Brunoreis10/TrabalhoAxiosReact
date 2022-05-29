'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ordem_compra extends Model {
    static associate(models) {
      this.belongsTo(models.cliente, { foreignKey: 'id_cliente' });
      this.belongsTo(models.produto, { foreignKey: 'id_produto'});
    }
  };
  ordem_compra.init({
    nr_quantidade: DataTypes.INTEGER,
    vl_total: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ordem_compra',
  });
  return ordem_compra;
};