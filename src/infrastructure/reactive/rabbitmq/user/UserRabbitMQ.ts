import { UserCrudUseCase } from "../../../../domain/usecase/user/UserCrudUseCase";
import { RabbitMQConfig } from "../RabbitMQConfig";
import { PostgresSQLRepository } from "../../../repository/PostgreSQLRepository";
import { UserEntity } from "../../../data/UserEntity";
import { UserRepository } from "../../../../domain/models/user/UserRepository";

export class UserRabbitMQ {
  private readonly queueUsers;
  private readonly repository: UserRepository = new PostgresSQLRepository(
    UserEntity
  );
  private readonly userUseCase: UserCrudUseCase = new UserCrudUseCase(
    this.repository
  );
  constructor() {
    this.queueUsers = new RabbitMQConfig("users");
    this.getDetailUSer().then();
  }

  public async getDetailUSer() {
    console.log("===>", this.queueUsers);
    const uuid = await this.queueUsers.receiveMessageToQueue();
    const userFound = this.userUseCase.getDetailUSer(uuid);
    console.log(userFound);
    /*
  this.queueUsers.channel.consume(this.queueUsers.queueName, (message) => {
    const data = JSON.parse(JSON.stringify(message.content.toString()));
    this.queueUsers.channel.ack(message);
    const userFound = this.userUseCase.getDetailUSer(data);
    console.log(userFound);
  });
       */
  }
}
