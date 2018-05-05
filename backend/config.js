module.exports = {
  db: {
    user: '@db_user_name',
    password: '@db_user_password',
    database: '@db_name',
    socketPath: '/var/run/mysqld/mysqld.sock'
  },
  env: 'dev',
  port: '41205',
  jwtToken: '@jwt_token',
  google_client_id: '@google_id',
  google_client_secret: '@google_secret_id'
}
