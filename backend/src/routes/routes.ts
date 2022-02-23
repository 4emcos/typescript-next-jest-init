import { Router } from "express";
import { createUserFactory } from "../modules/createUser/CreateUserFactory";


const routes = Router();

routes.post("/users",(req, res ) => 
    createUserFactory().handle(req, res)
);


export {routes}