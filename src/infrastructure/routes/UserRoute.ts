import { Router } from "express";
import { UserCrudUseCase } from "../../domain/usecase/user/UserCrudUseCase";
import { UserData } from "../data/UserData";
import {UserDataAdapter} from "../data/UserDataAdapter";

const UserRoute = Router();

const adapter = new UserDataAdapter(UserData);
const useCase = new UserCrudUseCase(adapter);

UserRoute.post("/", useCase.registerUser);

export default UserRoute;
