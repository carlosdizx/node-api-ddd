import { User } from "./User";

export interface UserRepository {
  findByUuid(uuid: string): Promise<User>;
}
