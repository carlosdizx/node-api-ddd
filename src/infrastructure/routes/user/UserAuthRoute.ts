import { Router } from "express";
import { UserAuthUseCase } from "../../../domain/usecase/user/UserAuthUseCase";
import { UserData } from "../../data/user/UserData";
import {UserDataAuthAdapter} from "../../data/user/UserDataAuthAdapter";
import {UserAuthController} from "../../controller/user/UserAuthController";

const UserAuthRoute = Router();

const adapter = new UserDataAuthAdapter(UserData);
const useCase = new UserAuthUseCase(adapter);
const controller = new UserAuthController(useCase);


UserAuthRoute.post("/sing-up/", controller.registerUser);

export default UserAuthRoute;
