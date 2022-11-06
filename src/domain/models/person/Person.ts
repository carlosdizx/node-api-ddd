import { TypesDocument } from "../common/TypesDocument";

export class Person {
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly fullName: string;
  private typeDocument: TypesDocument;
  private document: string;
  private dateOfBirth: Date;

  constructor(
    firstName: string,
    lastName: string,
    typeDocument: TypesDocument,
    document: string,
    dateOfBirth: Date
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.typeDocument = typeDocument;
    this.document = document;
    this.dateOfBirth = dateOfBirth;
    this.fullName = this.firstName.concat(" ").concat(this.lastName);
  }
}
