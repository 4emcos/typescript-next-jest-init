import { User } from "../../entities/User";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepositories } from "../../repositories/IUsersRepositories";
import { CreateUserService } from "./CreateUserService";

describe("Create User Service", () => {
    let userRepository : IUsersRepositories;
    let createUserService: CreateUserService;

    beforeAll(() => {
        userRepository = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(userRepository);
    })

    it("Should be able to create a new user", async () => {
        
        const userData: User = {
            name: "Test Name",
            email: "test@test.com.br",
            username: "test.username",
        }

        const user = await createUserService.execute(userData)
        expect(user).toHaveProperty("id");
    })

    it("Should not be able to create a user with same username", async () => {

        const userData: User = {
            name: "Test Name",
            email: "test@test.com.br",
            username: "existing.username",
        }

        await createUserService.execute(userData)
        
        await expect(createUserService.execute(userData)).rejects.toEqual(new Error("User already exists"));

    })

})