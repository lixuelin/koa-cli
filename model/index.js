const nodeSQL = require('node-sql')
//standard tedious config object : http://tediousjs.github.io/tedious/api-connection.html#function_newConnection
const config = {
  userName: process.env.USERNAME,
  password: process.env.PASSWORD,
  server: 'MyServer',
  domain: 'DOMAIN'
}
model.exports={nodeSQL, config} 
