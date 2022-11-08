import { Request, Response } from "express";
import { UserRoleUseCase } from "../../../domain/usecase/role/UserRoleUseCase";
import { UserRole } from "../../../domain/models/role/UserRole";

export class UserRoleController {
  constructor(private readonly useCase: UserRoleUseCase) {}

  public createRole = async ({ body }: Request, res: Response) => {
    const userRole: UserRole = await this.useCase.createUserRole(body);
    res.send(userRole);
  };
}
