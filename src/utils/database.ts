import * as mysql from "mysql2";
import "dotenv/config";

const MYSQL_HOST = process.env.MYSQL_HOST as string;
const MYSQL_PORT = parseInt(process.env.MYSQL_PORT as string);
const MYSQL_USER = process.env.MYSQL_USER as string;
const MYSQL_PASS = process.env.MYSQL_PASS as string;
const MYSQL_SSL_KEY = process.env.MYSQL_SSL_KEY as string;

let pool: mysql.Pool = mysql.createPool({
	host: MYSQL_HOST,
	port: MYSQL_PORT,
	user: MYSQL_USER,
	password: MYSQL_PASS,
	ssl: {
		ca: MYSQL_SSL_KEY
	},
	database: "tradingLogs"
});

export default pool