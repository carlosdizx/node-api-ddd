import { Router } from "express";
import { UserUseCase } from "../../../domain/usecase/user/UserUseCase";
import { UserData } from "../../data/user/UserData";
import {UserDataAdapter} from "../../data/user/UserDataAdapter";
import {UserController} from "../../controller/user/UserController";

const userRoute = Router();

const adapter = new UserDataAdapter(UserData);
const useCase = new UserUseCase(adapter);
const controller = new UserController(useCase);


userRoute.get("/find-user/", controller.findUserByUuid);

export default userRoute;
