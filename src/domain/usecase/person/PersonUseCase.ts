import { PersonRepository } from "../../models/person/PersonRepository";
import { Person } from "../../models/person/Person";
import { UserRepository } from "../../models/user/UserRepository";
import { User } from "../../models/user/User";

export class PersonUseCase {
  constructor(
    private readonly mainRepository: PersonRepository,
    private readonly twoRepository: UserRepository
  ) {}

  public createPerson = async ({
    firstName,
    lastName,
    typeDocument,
    document,
    dateOfBirth,
    uuidUser,
  }) => {
    const user: User = await this.twoRepository.findByUuid(uuidUser);
    const person: Person = new Person(
      firstName,
      lastName,
      typeDocument,
      document,
      dateOfBirth,
      user
    );
    return await this.mainRepository.create(person);
  };
}
