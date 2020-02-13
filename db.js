const cf = require('./config.json');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : cf.db_host,
  user     : cf.db_username,
  password : cf.db_password,
  database : cf.db_name,
  insecureAuth : true
});

exports.getLog = (limit, offset) => {
    if  (!limit) {
      limit = 10
    }
    if  (!offset) {
      offset = 0
    }
    return new Promise((resolve, reject) => {
      try { 
        connection.connect();
        connection.query(`SELECT * from wifi-logger.log_collector limit ${limit} `, 
          (error, results) => {
          if (error) reject(error);
          console.log('The results is: ', results);
          resolve(results)
        });
        connection.end();
      } catch(err) {
        reject(err)
      }
    })
};