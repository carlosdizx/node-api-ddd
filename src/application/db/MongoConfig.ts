import { DataSource } from "typeorm";
import { UserData } from "../../infrastructure/data/user/UserData";
import { PersonData } from "../../infrastructure/data/person/PersonData";

export const MongoDataSource = new DataSource({
  type: "mongodb",
  host: process.env.DB_MONGO_HOST,
  port: parseInt(process.env.DB_MONGO_PORT),
  database: process.env.DB_MONGO_DATABASE,
  entities: [UserData, PersonData],
});

const dbMongoInit = async () => {
  try {
    console.log("Connecting to MongoDB");
    await MongoDataSource.initialize();
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error("Error during Data Source initialization", e);
  }
};

export default dbMongoInit;
