import knex from 'knex';

const conexion = knex({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '33816870',
    database : 'proyectos'
  },
  pool: { min: 0, max: 7 }
});


module.exports=conexion;