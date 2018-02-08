
module.exports = {
  development: {
      dialect: 'postgres',
      user: 'postgres',
      host: 'localhost',
      password: 'neha',
      //port: 3211,
      database: 'managementpro'
  },
  staging: {
    dialect: 'postgres',
    user: 'postgres',
    host: 'localhost',
    password: 'neha',
    //port: 3211,
    database: 'managementpro'
  },
  production: {
    dialect: 'postgres',
    user: 'postgres',
    host: 'localhost',
    password: 'neha',
    //port: 3211,
    database: 'managementpro' +
    ''
  }
};
