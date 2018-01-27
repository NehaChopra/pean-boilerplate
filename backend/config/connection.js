/*
 Database set up can be performed using link
 https://www.techrepublic.com/blog/diy-it-guy/diy-a-postgresql-database-server-setup-anyone-can-handle/
 */

dbconfig = require("./../../dbconfig");
const { Pool, Client } = require('pg');
// pools will use environment variables
// for connection information
const pool = new Pool({
	user: dbconfig.connection.user,
	host: dbconfig.connection.host,
	database: dbconfig.database,
	password: dbconfig.connection.password,
	port: dbconfig.connection.port
});
//pool.query('SELECT NOW()', (err, res) => {
//	console.log(err, res);
//	pool.end()
//});
const client = new Client({
	user: dbconfig.connection.user,
	host: dbconfig.connection.host,
	database: dbconfig.database,
	password: dbconfig.connection.password,
	port: dbconfig.connection.port
});
client.connect(function(err){
	if(!err) {
		console.log("Connection is established successfully...");
	} else {
		console.log("Connection to pg setup failure...\n\n");
	}
});

//client.query('SELECT NOW()', (err, res) => {
//	console.log(err, res);
//	client.end();
//});


module.exports = connection;