"use strict";
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || '123456',
    database: process.env.DB_NAME || 'matricula-db',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 5432),
    dialect: 'postgres',
};
module.exports = config;
