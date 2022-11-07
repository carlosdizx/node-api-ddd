import { Router } from "express";
import { PersonUseCase } from "../../../domain/usecase/person/PersonUseCase";
import { PersonData } from "../../data/person/PersonData";
import { UserData } from "../../data/user/UserData";
import { PersonDataAdapter } from "../../data/person/PersonDataAdapter";
import { UserDataAdapter } from "../../data/user/UserDataAdapter";
import { PersonController } from "../../controller/person/PersonController";

const personRoute = Router();

const personAdapter = new PersonDataAdapter(PersonData);
const userAdapter = new UserDataAdapter(UserData);
const useCase = new PersonUseCase(personAdapter, userAdapter);
const controller = new PersonController(useCase);

personRoute.post("/", controller.createPerson);
personRoute.get("/all", controller.listAll);

export default personRoute;
