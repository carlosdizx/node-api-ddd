import { User } from "./User";

export interface UserAuthRepository {
  findByUuid(uuid: string): Promise<User>;
}
