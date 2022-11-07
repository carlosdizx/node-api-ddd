import { Router } from "express";
import { PersonData } from "../../data/person/PersonData";
import { PersonDataAdapter } from "../../data/person/PersonDataAdapter";
import { PersonController } from "../../controller/person/PersonController";
import { PersonUseCase } from "../../../domain/usecase/person/PersonUseCase";
import { UserDataAdapter } from "../../data/user/UserDataAdapter";
import { UserData } from "../../data/user/UserData";

const personRoute = Router();

const personAdapter = new PersonDataAdapter(PersonData);
const userAdapter = new UserDataAdapter(UserData);
const useCase = new PersonUseCase(personAdapter, userAdapter);
const controller = new PersonController(useCase);

personRoute.post("/", controller.createPerson);

export default personRoute;
