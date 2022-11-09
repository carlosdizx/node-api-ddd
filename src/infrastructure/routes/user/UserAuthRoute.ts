import { Router } from "express";
import { UserAuthUseCase } from "../../../domain/usecase/user/UserAuthUseCase";
import { UserData } from "../../data/user/UserData";
import { UserDataAuthAdapter } from "../../data/user/UserDataAuthAdapter";
import { UserAuthController } from "../../controller/user/UserAuthController";
import { RoleDataAdapter } from "../../data/role/RoleDataAdapter";
import { RoleData } from "../../data/role/RoleData";
import { UserRoleDataAdapter } from "../../data/role/UserRoleDataAdapter";
import { UserRoleData } from "../../data/role/UserRoleData";

const userAuthRoute = Router();

const adapter = new UserDataAuthAdapter(UserData);
const adapterRole = new RoleDataAdapter(RoleData);
const adapterUserRole = new UserRoleDataAdapter(UserRoleData);
const useCase = new UserAuthUseCase(adapter, adapterRole, adapterUserRole);
const controller = new UserAuthController(useCase);

userAuthRoute.post("/sing-up/", controller.registerUser);

export default userAuthRoute;
