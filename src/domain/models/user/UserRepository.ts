import { User } from "./User";

export interface UserRepository {
  register(user: User): Promise<User>;
}
