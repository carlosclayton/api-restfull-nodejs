// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'db_node',
      user:     'root',
      password: '131078'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'db_node',
      user:     'root',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'dagt57krqif9tf',
      user:     'qrplxvydlpzqnx',
      password: '8b0ffe5fa40d7e1d3529b1515f24ea59cca1effde9a559dc88e35ad60afe944b'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
