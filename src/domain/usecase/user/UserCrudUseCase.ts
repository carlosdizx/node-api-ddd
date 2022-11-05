import {UserRepository} from "../../models/user/UserRepository";
import {User} from "../../models/user/User";
import bcrypt from "bcryptjs";

export class UserCrudUseCase {
    constructor(private readonly userRepository: UserRepository) {
    }

    public registerUser = async ({name, email, password, description}) => {
        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(password, salt);
        const user = new User(name, email, pass, description);
        return await this.userRepository.save(user);
    };

    public getDetailUSer = async (uuid: string) => {
        return await this.userRepository.findById(uuid);
    };

    public getAllUsers = async () => {
        return await this.userRepository.list();
    };

    public updateUser = async (
        uuid: string,
        {name, email, description}: any
    ) => {
        let userFound = await this.userRepository.findById(uuid);
        const user = new User(name, email, description);
        userFound = Object.assign(userFound, user);
        userFound.uuid = uuid;
        return await this.userRepository.save(userFound);
    };

    public deleteUser = async (uuid: string) => {
        const userFound = await this.userRepository.findById(uuid);
        await this.userRepository.delete(uuid);
        return userFound;
    };
}
