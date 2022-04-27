module.exports = {
  HOST: 'eats-db.cgmnjuyneozj.us-east-1.rds.amazonaws.com',
  USER: 'admin',
  PASSWORD: 'eatsdbpsswd',
  DB: 'eats_test',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
