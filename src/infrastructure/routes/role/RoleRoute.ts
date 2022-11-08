import { Router } from "express";
import { RoleDataAdapter } from "../../data/role/RoleDataAdapter";
import { RoleData } from "../../data/role/RoleData";
import { RoleUseCase } from "../../../domain/usecase/role/RoleUseCase";
import { RoleController } from "../../controller/role/RoleController";

const roleRoute = Router();

const adapter = new RoleDataAdapter(RoleData);
const useCase = new RoleUseCase(adapter);
const controller = new RoleController(useCase);

roleRoute.post("/", controller.createRole);
roleRoute.get("/all", controller.listAllRoles);

export default roleRoute;
