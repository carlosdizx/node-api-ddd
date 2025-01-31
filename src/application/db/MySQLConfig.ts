import { DataSource } from "typeorm";
import { UserData } from "../../infrastructure/data/user/UserData";

export const MysqlDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_MYSQL_HOST,
  port: parseInt(`${process.env.DB_MYSQL_PORT}`),
  username: process.env.DB_MYSQL_USER,
  password: process.env.DB_MYSQL_PASSWORD,
  database: process.env.DB_MYSQL_DATABASE,
  entities: [UserData],
});

const dbMySQLInit = async () => {
  try {
    console.log("Connecting to MySQL");
    await MysqlDataSource.initialize();
    console.log("Connected to MySQL");
  } catch (e) {
    console.error("Error during Data Source initialization", e);
  }
};

export default dbMySQLInit;
