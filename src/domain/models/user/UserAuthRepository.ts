import { User } from "./User";

export interface UserAuthRepository {
  register(user: User): Promise<User>;
}
