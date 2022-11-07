import { PersonUseCase } from "../../../domain/usecase/person/PersonUseCase";
import { Request, Response } from "express";

export class PersonController {
  constructor(private readonly useCase: PersonUseCase) {
    this.createPerson = this.createPerson.bind(this);
  }

  public createPerson = async ({ query, body }: Request, res: Response) => {
    const { uuid } = query;
    const data: any = body;
    data.uuid = uuid;
    const person = await this.useCase.createPerson(data);
    res.send(person);
  };
}
