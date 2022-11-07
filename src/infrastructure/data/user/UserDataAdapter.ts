import { MongoRepository } from "../../repository/MongoRepository";
import { UserAuthRepository } from "../../../domain/models/user/UserAuthRepository";

export class UserDataAdapter extends MongoRepository implements UserAuthRepository {
  constructor(entity: any) {
    super(entity);
  }

  register(user: any): Promise<any> {
    return super.save(user);
  }
}
