import { Request, Response } from "express";
import { UserAuthUseCase } from "../../../domain/usecase/user/UserAuthUseCase";

export class UserAuthController {
  constructor(private userUseCase: UserAuthUseCase) {
    this.registerUser = this.registerUser.bind(this);
  }

  public async registerUser({ body }: Request, res: Response) {
    const user = await this.userUseCase.registerUser(body);
    res.send(user);
  }
}
