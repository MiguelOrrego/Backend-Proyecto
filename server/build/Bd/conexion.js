"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const conexion = knex_1.default({
    client: 'pg',
    version: '7.2',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '33816870',
        database: 'proyectos'
    },
    pool: { min: 0, max: 7 }
});
module.exports = conexion;
