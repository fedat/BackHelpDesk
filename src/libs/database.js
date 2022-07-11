const { db } = require('../config');
const {Sequelize}=require('sequelize')
const setupModels= require('../models')

const USER = encodeURIComponent(db.user);
const PASSWORD = encodeURIComponent(db.password);
const URI = `postgres://${USER}:${PASSWORD}@${db.host}:${db.port}/${db.database}`;

const sequelize= new Sequelize(URI,{
    dialect:'postgres',
    logging:true,
});
setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
