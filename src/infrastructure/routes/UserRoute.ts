import { Router } from "express";
import { UserCrudUseCase } from "../../domain/usecase/user/UserCrudUseCase";
import { UserController } from "../controller/user/UserController";
import { MongoRepository } from "../repository/MongoRepository";
import { UserEntity } from "../data/UserEntity";

const UserRoute = Router();

const repositoryMongo = new MongoRepository(UserEntity);
const useCaseMongo = new UserCrudUseCase(repositoryMongo);
const controllerMongo = new UserController(useCaseMongo);

UserRoute.post("/", controllerMongo.registerUser);
UserRoute.get("/", controllerMongo.getDetailUSer);
UserRoute.get("/all", controllerMongo.getAllUsers);
UserRoute.put("/", controllerMongo.updateUser);
UserRoute.delete("/", controllerMongo.deleteUser);

export default UserRoute;
