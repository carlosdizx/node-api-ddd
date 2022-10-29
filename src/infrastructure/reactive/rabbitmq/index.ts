import { RabbitMQConfig } from "./RabbitMQConfig";

const initRabbitMQ = async () => {
  const queues: RabbitMQConfig[] = [];
  queues.push(await new RabbitMQConfig("xd"));
  return queues;
};

export default initRabbitMQ;
