import { IUsersRepositories } from "../../repositories/IUsersRepositories";
import {User} from '../../entities/User';

interface IUserRequest {
    username: string;
    email: string;
    name: string;
}

class CreateUserService {
    constructor(private usersRepository: IUsersRepositories) {}

    async execute ({ email, username, name}: IUserRequest) {
        const userAlreadyExists = await this.usersRepository.exists(username)

        if (userAlreadyExists) {
            throw new Error('User already exists')
        }

        const userCreate = User.create({email, username, name})
        const user = await this.usersRepository.create(userCreate)
        return user
    }


}

export {CreateUserService}