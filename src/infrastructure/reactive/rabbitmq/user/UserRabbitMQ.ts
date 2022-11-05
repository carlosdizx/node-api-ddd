import { RabbitMQConfig } from "../RabbitMQConfig";

const exchange = "ex.ddd.finaktiva";
const type = "direct";
const routingKey = "rk.users.send";
const queue: string = "users.listener";

const userConfig: RabbitMQConfig = new RabbitMQConfig(
  exchange,
  type,
  routingKey,
  queue
);
const registerUser = async () => {
  await userConfig.createChannel();

  await userConfig.channel.consume(queue, async (message) => {
    const data = JSON.parse(
      JSON.parse(JSON.stringify(message.content.toString()))
    );
    console.log("Recibiendo ==>", data)
    userConfig.channel.ack(message);
    await userConfig.publishMessage(data);
  });
};

const userConfigInit = async () => {
  await registerUser();
};

export default userConfigInit;
