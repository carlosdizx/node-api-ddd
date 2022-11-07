import { MongoRepository } from "../../repository/MongoRepository";
import { UserRepository } from "../../../domain/models/user/UserRepository";

export class UserDataAdapter extends MongoRepository implements UserRepository {
  constructor(entity: any) {
    super(entity);
  }

  findByUuid(uuid: string): Promise<any> {
    return super.findById(uuid);
  }
}
