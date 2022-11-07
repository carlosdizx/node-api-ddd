export class User {
  private readonly email: string;
  private readonly password: string;
  private readonly description: string;

  constructor(email: string, password: string, description?: string) {
    this.email = email;
    this.password = password;
    this.description = description ?? "default";
  }
}
