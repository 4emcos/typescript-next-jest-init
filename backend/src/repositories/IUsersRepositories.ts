import { User } from '../entities/User';

interface IUsersRepositories {
    create(user: User): Promise<User>;
    exists(username: string): Promise<boolean>

}


export {IUsersRepositories}