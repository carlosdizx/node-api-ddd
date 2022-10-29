import { RabbitMQConfig } from "./RabbitMQConfig";

const initRabbitMQ = async () => {
  const queues: RabbitMQConfig[] = [];
  queues.push(await new RabbitMQConfig("users"));
  return queues;
};

export default initRabbitMQ;
