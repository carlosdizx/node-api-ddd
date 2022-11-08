import { RoleUseCase } from "../../../domain/usecase/role/RoleUseCase";
import { Role } from "../../../domain/models/role/Role";
import { Request, Response } from "express";

export class RoleController {
  constructor(private readonly useCase: RoleUseCase) {}

  public createRole = async ({ body }: Request, res: Response) => {
    const role: Role = await this.useCase.createRole(body);
    res.send(role);
  };

  public listAllRoles = async (req: Request, res: Response) => {
    const list: Role[] = await this.useCase.listAllRoles();
    res.send(list);
  };
}
