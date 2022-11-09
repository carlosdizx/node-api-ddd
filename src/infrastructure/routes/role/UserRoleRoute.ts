import { Router } from "express";
import { UserRoleDataAdapter } from "../../data/role/UserRoleDataAdapter";
import { UserRoleData } from "../../data/role/UserRoleData";
import { UserRoleUseCase } from "../../../domain/usecase/role/UserRoleUseCase";
import { UserRoleController } from "../../controller/role/UserRoleController";

const userRoleRoute = Router();

const adapter = new UserRoleDataAdapter(UserRoleData);
const useCase = new UserRoleUseCase(adapter);
const controller = new UserRoleController(useCase);

userRoleRoute.post("/", controller.createRole);

export default userRoleRoute;
