require('dotenv').config()
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
console.log('process.env.SQL_USERNAME, process.env.SQL_PASSWORD, process.env.SQL_HOST')
const sequelize = new sequelize_1.Sequelize('chatappdata', process.env.SQL_USERNAME, process.env.SQL_PASSWORD, { host: process.env.SQL_HOST, dialect: 'postgres' });
exports.default = sequelize;
