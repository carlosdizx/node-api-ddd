import { Router } from "express";
import { UserCrudUseCase } from "../../domain/usecase/user/UserCrudUseCase";
import { UserController } from "../controller/user/UserController";
import { MongoRepository } from "../repository/MongoRepository";
import { MySQLRepository } from "../repository/MySQLRepository";
import { UserEntity } from "../data/UserEntity";
import {PostgresSQLRepository} from "../repository/PostgreSQLRepository";

const UserRoute = Router();

const repositoryMongo = new MongoRepository(UserEntity);
const useCaseMongo = new UserCrudUseCase(repositoryMongo);
const controllerMongo = new UserController(useCaseMongo);

UserRoute.post("/mongo", controllerMongo.registerUser);
UserRoute.get("/mongo", controllerMongo.getDetailUSer);
UserRoute.get("/mongo/all", controllerMongo.getAllUsers);
UserRoute.put("/mongo", controllerMongo.updateUser);
UserRoute.delete("/mongo", controllerMongo.deleteUser);

const repositoryMySQL = new MySQLRepository(UserEntity);
const useCaseMySQL = new UserCrudUseCase(repositoryMySQL);
const controllerMySQL = new UserController(useCaseMySQL);

UserRoute.post("/mysql", controllerMySQL.registerUser);
UserRoute.get("/mysql", controllerMySQL.getDetailUSer);
UserRoute.get("/mysql/all", controllerMySQL.getAllUsers);
UserRoute.put("/mysql", controllerMySQL.updateUser);
UserRoute.delete("/mysql", controllerMySQL.deleteUser);

const repositoryPostgresSQL = new PostgresSQLRepository(UserEntity);
const useCasePostgresSQL = new UserCrudUseCase(repositoryPostgresSQL);
const controllerPostgresSQL = new UserController(useCasePostgresSQL);

UserRoute.post("/postgres", controllerPostgresSQL.registerUser);
UserRoute.get("/postgres", controllerPostgresSQL.getDetailUSer);
UserRoute.get("/postgres/all", controllerPostgresSQL.getAllUsers);
UserRoute.put("/postgres", controllerPostgresSQL.updateUser);
UserRoute.delete("/postgres", controllerPostgresSQL.deleteUser);

export default UserRoute;
