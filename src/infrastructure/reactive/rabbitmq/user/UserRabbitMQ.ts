import { RabbitMQConfig } from "../RabbitMQConfig";
import { PostgresSQLRepository } from "../../../repository/PostgreSQLRepository";
import { UserEntity } from "../../../data/UserEntity";
import { UserCrudUseCase } from "../../../../domain/usecase/user/UserCrudUseCase";

const userConfig: RabbitMQConfig = new RabbitMQConfig();
const repository = new PostgresSQLRepository(UserEntity);
const crudUseCase = new UserCrudUseCase(repository);
const queue: string = "users.send";

const registerUser = async () => {
  await userConfig.createChannel();

  userConfig.channel.consume(queue, async (message) => {
    const data = JSON.parse(
      JSON.parse(JSON.stringify(message.content.toString()))
    );
    await crudUseCase.registerUser(data);
    userConfig.channel.ack(message);
  });
};

const userConfigInit = async () => {
  await registerUser();
};

export default userConfigInit;
