import { UserRabbitMQ } from "./user/UserRabbitMQ";

const initRabbitMQ = async () => {
  const queues: any[] = [];

  queues.push(new UserRabbitMQ());

  return queues;
};

export default initRabbitMQ;
