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
  private readonly queue: string;

  constructor(queue: string) {
    this.queue = queue;
    console.log("Connecting to RabbitMQ with queue: ".concat(this.queue));
    amqplib.connect(rabbitSettings);
    console.log("Connected to RabbitMQ with queue: ".concat(this.queue));
  }
}
