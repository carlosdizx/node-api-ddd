import amqplib from "amqplib";

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
  private channel: any;
  private queue: any;

  constructor(queue: string) {
    this.intiRabbit(queue).then();
  }

  private intiRabbit = async (queue: string) => {
    console.log("Connecting to RabbitMQ");
    this.connect = await this.createConnection();
    this.channel = await this.createChannel();
    this.queue = await this.createQueue(queue);
    console.log("Connected to RabbitMQ");
  };

  private createConnection = async () => await amqplib.connect(rabbitSettings);

  private createChannel = async () => await this.connect.createChannel();

  private createQueue = async (queue: string) =>
    await this.channel.assertQueue(queue);
}
