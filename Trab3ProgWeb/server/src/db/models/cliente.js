'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    static associate(models) {
      this.hasOne(models.ordem_compra, { foreignKey: 'id_cliente'});
    }
  };
  cliente.init({
    nm_cliente: DataTypes.STRING,
    nr_cpf: DataTypes.STRING,
    ds_email: DataTypes.STRING,
    nr_telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cliente',
  });
  return cliente;
};