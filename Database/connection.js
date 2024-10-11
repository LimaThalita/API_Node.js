var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',      /*por padrão localhost*/
        user : 'root',       /*por padrão root*/
        password : '200203',  /* sua senha definida*/
        database : 'teste'        /*nome do seu banco criado*/
     }
});
module.exports = knex
