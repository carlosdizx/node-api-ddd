import { MongoRepository } from "../../repository/MongoRepository";
import { PersonRepository } from "../../../domain/models/person/PersonRepository";

export class PersonDataAdapter
  extends MongoRepository
  implements PersonRepository
{
  create(person: any): Promise<any> {
    return super.save(person);
  }

  findAll(): Promise<any[]> {
    return super.list();
  }
}
