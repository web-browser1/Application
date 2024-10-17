import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DB || 'math_calculations',
});

export const dbConnection = async () => {
  try {
    await db.getConnection();
    console.log("Connected to MySQL");
  } catch (err) {
    console.error("Error connecting to MySQL:", err);
  }
};
