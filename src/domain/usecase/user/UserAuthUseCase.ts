import {UserRepository} from "../../models/user/UserRepository";
import {User} from "../../models/user/User";
import bcrypt from "bcryptjs";

export class UserAuthUseCase {
    constructor(private readonly userRepository: UserRepository) {
    }

    public registerUser = async ({name, email, password, description}) => {
        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(password, salt);
        const user = new User(name, email, pass, description);
        return await this.userRepository.register(user);
    };
}
