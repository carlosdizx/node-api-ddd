import { MongoRepository } from "../../repository/MongoRepository";
import { PersonRepository } from "../../../domain/models/person/PersonRepository";
import { PersonData } from "./PersonData";

export class PersonDataAdapter
  extends MongoRepository
  implements PersonRepository
{
  create(person: any): Promise<any> {
    return super.save(person);
  }

  async findAll(): Promise<any[]> {
    const result = await this.dataSource()
      .getRepository(PersonData)
      .find({
        join: {
          alias: "person",
          innerJoinAndSelect: {
            user: "person.user",
          },
        },
      });
    console.log(result);
    return result;
  }
}
