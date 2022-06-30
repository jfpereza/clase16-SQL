import options from "../src/mariadb.js";
const knex = options;

knex.schema.createTable('kronos2', table => {
    table.increments('id'),
        table.string('name'),
        table.string('lasname'),
        table.integer('age')

})
    .then(() => console.log('R... Table ok'))
    .catch(err => { console.log(err); throw err })
    .finally(() => {
        knex.destroy()
    });

