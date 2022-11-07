import { Router } from "express";
import { UserAuthUseCase } from "../../../domain/usecase/user/UserAuthUseCase";
import { UserData } from "../../data/user/UserData";
import {UserDataAuthAdapter} from "../../data/user/UserDataAuthAdapter";
import {UserAuthController} from "../../controller/user/UserAuthController";

const userAuthRoute = Router();

const adapter = new UserDataAuthAdapter(UserData);
const useCase = new UserAuthUseCase(adapter);
const controller = new UserAuthController(useCase);

userAuthRoute.post("/sing-up/", controller.registerUser);

export default userAuthRoute;
