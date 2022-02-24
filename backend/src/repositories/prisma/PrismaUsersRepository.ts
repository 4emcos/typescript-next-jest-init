import { prisma } from "../../database/client";
import { User } from "../../entities/User";
import { IUsersRepositories } from "../IUsersRepositories";


class PrismaUsersRepository implements IUsersRepositories {
    async exists(username: string): Promise<boolean> {
        const user = await prisma.user.findUnique({
            where: {
                username
            }
        })


        return !!user;
    }

    async create({username, email, name} : User): Promise<User> {
        console.log(username, email, name)
        const user = await prisma.user.create({
            data: {
                username,
                email,
                name
            }
        })

        return user;
    }
}

export { PrismaUsersRepository }