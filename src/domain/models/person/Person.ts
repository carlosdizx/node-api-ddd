import { TypesDocument } from "../common/TypesDocument";
import { User } from "../user/User";

export class Person {
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly typeDocument: TypesDocument;
  private readonly document: string;
  private readonly dateOfBirth: Date;
  private readonly user: User;

  constructor(
    firstName: string,
    lastName: string,
    typeDocument: TypesDocument,
    document: string,
    dateOfBirth: Date,
    user: User
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.typeDocument = typeDocument;
    this.document = document;
    this.dateOfBirth = dateOfBirth;
    this.user = user;
  }
}
