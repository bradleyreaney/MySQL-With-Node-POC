import * as dotenv from 'dotenv'
import mysql from 'mysql';

dotenv.config()

const mysqlConfig = {
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	user: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD,
	connectionLimit: 10
}

var con = mysql.createConnection(mysqlConfig);

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected to MySQL Server!");
});

con.end(function (err) {
	if (err) throw err;
	console.log("Closed connected to MySQL Server!");
});