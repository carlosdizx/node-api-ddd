import { Router } from "express";
import { UserAuthUseCase } from "../../domain/usecase/user/UserAuthUseCase";
import { UserData } from "../data/user/UserData";
import {UserDataAdapter} from "../data/user/UserDataAdapter";
import {UserController} from "../controller/user/UserController";

const UserRoute = Router();

const adapter = new UserDataAdapter(UserData);
const useCase = new UserAuthUseCase(adapter);
const controller = new UserController(useCase);


UserRoute.post("/", controller.registerUser);

export default UserRoute;
