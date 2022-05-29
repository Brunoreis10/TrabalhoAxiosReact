const Sequelize = require('sequelize');
module.exports = {
  development: {
    host: 'localhost',
    dialect: 'mysql',
    username: 'root', 
    password: '1234',
    port: '3306',
    database: 'cliente',
    logging: false,
    define:{
      underscored: true
    }
  }
};

 