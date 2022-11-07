import { Router } from "express";
import { UserAuthUseCase } from "../../domain/usecase/user/UserAuthUseCase";
import { UserData } from "../data/user/UserData";
import {UserDataAuthAdapter} from "../data/user/UserDataAuthAdapter";
import {UserController} from "../controller/user/UserController";

const UserRoute = Router();

const adapter = new UserDataAuthAdapter(UserData);
const useCase = new UserAuthUseCase(adapter);
const controller = new UserController(useCase);


UserRoute.post("/sing-up/", controller.registerUser);

export default UserRoute;
