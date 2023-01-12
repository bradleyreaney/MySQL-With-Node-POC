import * as dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();

// Config for the DB connection
const mysqlConfig = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    connectionLimit: 10
};

const dbName = 'mydb';
const tableName = 'customerData';

var con = mysql.createConnection(mysqlConfig);

// Creates the connection to the DB
con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to MySQL Server');
    console.log(`Checking for ${dbName}`);

    // Checks if the DB exists
    if (!con.query(`USE ${dbName}`)) {
        // If it doesn't then it will start the setup and create it
        console.log('Database did not exist. Creating DB.');
        con.query(`CREATE DATABASE ${dbName}`, function(err) {
            if (err) throw err;
        });
        console.log('Database created');
    } else {
        // If it does then it will drop it and recreate the data

        // Dropping database
        console.log('Database did exist. Dropping DB');
        con.query(`DROP DATABASE ${dbName}`, function(err) {
            if (err) throw err;
        });

        // Creating databse
        console.log('Creating the new Database');
        con.query(`CREATE DATABASE ${dbName}`, function(err) {
            if (err) throw err;
        });
        con.query(`USE ${dbName}`, function(err) {
            if (err) throw err;
            console.log('Database created');
        });

        // Creating table
        console.log('Creating the table');
        var createTable = `CREATE TABLE ${tableName} (id VARCHAR(255), panId VARCHAR(255), name VARCHAR(255), pan VARCHAR(255))`;
        con.query(createTable, function(err) {
            if (err) throw err;
            console.log('Table created');
        });

        // Inserting the data
        console.log('Insert customer data');
        var insertCustomerData = `INSERT INTO ${tableName} (id, panId, name, pan) VALUES ('1', '01', 'Test One', '11112222333344445555')`;
        con.query(insertCustomerData, function(err) {
            if (err) throw err;
            console.log('Customer data inserted');
        });

        // Return customer data
        var selectCustomerData = `SELECT * FROM ${tableName}`;
        con.query(selectCustomerData, function(err, result) {
            if (err) throw err;
            console.table(result);
        });

        // Closes the connection
        con.end(function(err) {
            if (err) throw err;
            console.log('Closed connected to MySQL Server');
        });
    }
});
