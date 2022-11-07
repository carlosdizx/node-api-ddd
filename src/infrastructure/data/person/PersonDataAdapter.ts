import { PostgresSQLRepository } from "../../repository/PostgreSQLRepository";
import { PersonRepository } from "../../../domain/models/person/PersonRepository";
import { PersonData } from "./PersonData";

export class PersonDataAdapter
  extends PostgresSQLRepository
  implements PersonRepository
{
  create(person: any): Promise<any> {
    return super.save(person);
  }

  async findAll(): Promise<any[]> {
    return this.dataSource()
      .getRepository(PersonData)
      .createQueryBuilder("person")
      .leftJoinAndSelect("person.user", "user")
      .getMany();
  }
}
