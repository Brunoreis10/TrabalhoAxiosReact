'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produto extends Model {
    static associate(models) {
      this.hasOne(models.ordem_compra, { foreignKey: 'id_produto' });
    }
  };
  produto.init({
    ds_produto: DataTypes.STRING,
    vl_produto: DataTypes.DECIMAL,
    dt_lancamento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'produto',
  });
  return produto;
};