require('dotenv').config()
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('chatappdata', proces.env.SQL_USERNAME, process.env.SQL_PASSWORD, { host: process.env.SQL_HOST, dialect: '' });
exports.default = sequelize;