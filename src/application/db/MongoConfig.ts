import { DataSource } from "typeorm";
import { UserEntity } from "../../infrastructure/data/UserEntity";

export const MongoDataSource = new DataSource({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "prueba",
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
