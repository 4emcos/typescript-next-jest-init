/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from "../../app";
import request from 'supertest'

 describe("Create User Controller", () => {
    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/users").send({
            username: "test-integrati2on",
            email: "testIntegration@te1st.com.br",
            name: "Test Integration",
        })

        console.log(response.body)
        expect(response.status).toBe(200)
    })
})