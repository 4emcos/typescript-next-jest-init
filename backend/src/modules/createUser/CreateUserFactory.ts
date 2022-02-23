import {PrismaUsersRepository} from '../../repositories/prisma/PrismaUsersRepository';
import { CreateUserController } from './CreateUserController';
import {CreateUserService} from './CreateUserService'

export const createUserFactory = () => {
    const usersRepository = new PrismaUsersRepository();
    const createUSer = new CreateUserService(usersRepository);
    const createUserController = new CreateUserController(createUSer);

    return createUserController;
}