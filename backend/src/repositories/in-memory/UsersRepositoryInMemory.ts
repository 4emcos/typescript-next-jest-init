import { prisma } from "../../database/client";
import {User} from '../../entities/User';
import { v4 as uuidv4 } from 'uuid';
import { IUsersRepositories } from "../IUsersRepositories";


class UsersRepositoryInMemory implements IUsersRepositories {
    private users: User[] = []

    async exists(username: String): Promise<boolean> {
        const user = this.users.some(user => user.username === username)

        return !!user;
    }

    async create(user : User): Promise<User> {
        Object.assign(user, {
            id: uuidv4()
        })

        this.users.push(user)
        return user;
    }

}

export {UsersRepositoryInMemory}