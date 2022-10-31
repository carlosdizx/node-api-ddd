import { RabbitMQConfig } from "../RabbitMQConfig";

const userConfig: RabbitMQConfig = new RabbitMQConfig();

const userConfigInit = async () => {
  const result = await userConfig.listenerMessages("users.send");
  console.log(result);
};

export default userConfigInit;
