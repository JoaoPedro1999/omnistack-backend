const knex = require('knex');
const configuration = require('../../knexfile');
const config = process.env.NODE_ENV === 'test' ? configuration.test : onfiguration.development;

const connection = knex(config);

module.exports = connection;