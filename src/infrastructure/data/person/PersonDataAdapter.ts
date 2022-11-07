import { PostgresSQLRepository } from "../../repository/PostgreSQLRepository";
import { PersonRepository } from "../../../domain/models/person/PersonRepository";

export class PersonDataAdapter
  extends PostgresSQLRepository
  implements PersonRepository
{
  create(person: any): Promise<any> {
    return super.save(person);
  }

  async findAll(): Promise<any[]> {
    return super.list();
  }
}
