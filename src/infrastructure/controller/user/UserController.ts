import { Request, Response } from "express";
import { UserCrudUseCase } from "../../../domain/usecase/user/UserCrudUseCase";

export class UserController {
  constructor(private userUseCase: UserCrudUseCase) {
    this.registerUser = this.registerUser.bind(this);
  }

  public async registerUser({ body }: Request, res: Response) {
    const user = await this.userUseCase.registerUser(body);
    res.send(user);
  }
}
