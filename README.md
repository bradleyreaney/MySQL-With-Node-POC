# MySQL-With-Node-POC
POC showing communicating with a MySQL DB using Node.
NOTE - This is a WIP project

## Starting the MySQL DB
From the root directory of the project run the `docker compose up` command to get the DB going.

By default the username will be `root` and the password is `example`.

## Runing the main app
1. Run `npm i` to intall the dependencies (If not already done)
2. Run `npm run start`

## Runing the database data creator app
1. Run `npm i` to intall the dependencies (If not already done)
2. Run `npm run createData`

Currently this just has a console log as a place holder. Going to start by looking at the mySqlDataSetup.helper.js code.

## dotenv
The project requires dotenv. create a file called `.env` and add the following options;
- MYSQL_HOST="localhost"
- MYSQL_PORT="3306"
- MYSQL_USERNAME="root"
- MYSQL_PASSWORD="example"
