import { TypesDocument } from "../common/TypesDocument";
import { User } from "../user/User";
import {v4 as uuid} from "uuid";

export class Person {
  private uuid: string;
  private readonly firstName: string;
  private readonly lastName: string;
  private typeDocument: TypesDocument;
  private document: string;
  private dateOfBirth: Date;
  private user: User;

  constructor(
    firstName: string,
    lastName: string,
    typeDocument: TypesDocument,
    document: string,
    dateOfBirth: Date,
    user: User
  ) {
    this.uuid = uuid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.typeDocument = typeDocument;
    this.document = document;
    this.dateOfBirth = dateOfBirth;
    this.user = user;
  }
}
