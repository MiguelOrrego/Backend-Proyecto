"use strict";
const knex = require('../Bd/conexion');
let now = new Date();
knex.schema.createTable('proyecto', (table) => {
    table.increments('id');
    table.integer('emprendedor');
    table.text('nombre');
    table.text('descripcion');
    table.bytea('imagenes');
    table.bytea('videos');
    table.bigint('costo_minimo');
    table.bigint('costo_optimo');
    table.integer('calificacion');
    table.date('fecha');
});
module.exports = knex;
