import { DataSource } from "typeorm";
import { UserEntity } from "../../infrastructure/data/UserEntity";

export const MongoDataSource = new DataSource({
  type: "mongodb",
  host: process.env.DB_MONGO_HOST,
  port: parseInt(process.env.DB_MONGO_PORT),
  database: process.env.DB_MONGO_DATABASE,
  entities: [UserEntity],
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
