import { Router } from "express";
import { UserCrudUseCase } from "../../domain/usecase/user/UserCrudUseCase";
import { UserData } from "../data/UserData";
import {UserDataAdapter} from "../data/UserDataAdapter";
import {UserController} from "../controller/user/UserController";

const UserRoute = Router();

const adapter = new UserDataAdapter(UserData);
const useCase = new UserCrudUseCase(adapter);
const controller = new UserController(useCase);


UserRoute.post("/", controller.registerUser);

export default UserRoute;
