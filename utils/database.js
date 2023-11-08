"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
console.log(process.env.SQL_USERNAME, process.env.SQL_PASSWORD, process.env.SQL_HOST, process.env.SQL_DBNAME)
const sequelize = new sequelize_1.Sequelize(process.env.SQL_DBNAME, process.env.SQL_USERNAME, process.env.SQL_PASSWORD, { host: process.env.SQL_HOST, dialect: 'mysql' });
exports.default = sequelize;
