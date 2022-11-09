import { Request, Response } from "express";
import { UserUseCase } from "../../../domain/usecase/user/UserUseCase";

export class UserController {
  constructor(private readonly useCase: UserUseCase) {
    this.findUserByUuid = this.findUserByUuid.bind(this);
  }

  public async findUserByUuid({ query }: Request, res: Response) {
    const { uuid } = query;
    const user = await this.useCase.findUserByUuid(`${uuid}`);
    res.send(user);
  }
}
