import { RabbitMQConfig } from "./RabbitMQConfig";

const initRabbitMQ = async () => {
  const queues: RabbitMQConfig[] = [];

  const queueUsers = await new RabbitMQConfig("users");
  queues.push(queueUsers);

  return queues;
};

export default initRabbitMQ;
