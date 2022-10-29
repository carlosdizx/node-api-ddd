import amqplib from "amqplib";
const uri: string = process.env.RABBIT_MQ;

const rabbitSettings = {
  protocol: "amqp",
  hostname: "localhost",
  port: 5672,
  username: "superadmin",
  password: "rH9b79tdVfekR5T",
  vhost: "/",
  authMechanism: ["PLAIN", "AMQPLAIN", "EXTERNAL"],
};

export class RabbitMQConfig {
  private connect: any;
  private queue: string;

  constructor(queue: string) {
    this.initRabitt(queue).then();
  }

  private initRabitt = async (queue: string) => {
    this.connect = await this.createConnection();
    this.queue = await this.createQueue(queue);
  };

  private createConnection = async () => {
    console.log("Connecting to RabbitMQ");
    return await amqplib.connect(rabbitSettings);
  };

  private createQueue = async (queue: string) => {
    const channel = await this.connect.createChannel();
    return await channel.assertQueue(queue);
  };
}
