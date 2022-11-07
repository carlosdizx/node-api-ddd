import { PersonRepository } from "../../models/person/PersonRepository";
import { Person } from "../../models/person/Person";
import { UserAuthUseCase } from "../user/UserAuthUseCase";

export class PersonUseCase {
  constructor(
    private readonly mainRepository: PersonRepository,
    private readonly twoRepository: UserAuthUseCase
  ) {}

  public createPerson = async ({
    firstName,
    lastName,
    typeDocument,
    document,
    dateOfBirth,
    uuidUser,
  }) => {
    const person: Person = new Person(
      firstName,
      lastName,
      typeDocument,
      document,
      dateOfBirth,
      null
    );
    return await this.mainRepository.create(person);
  };
}
