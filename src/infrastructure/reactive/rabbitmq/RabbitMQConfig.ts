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
  private _channel: any;
  private queue: any;
  private readonly _queueName: string;

  constructor(queue: string) {
    this._queueName = queue;
    this.intiRabbit(queue).then();
  }

  private intiRabbit = async (queue: string) => {
    console.log("Connecting to RabbitMQ");
    this.connect = await this.createConnection();
    this._channel = await this.createChannel();
    this.queue = await this.createQueue(queue);
    console.log("Connected to RabbitMQ");
  };

  private createConnection = async () => await amqplib.connect(rabbitSettings);

  private createChannel = async () => await this.connect.createChannel();

  private createQueue = async (queue: string) =>
    await this._channel.assertQueue(queue);

  public sendMessageToQueue = async (message: any) =>
    await this._channel.sendToQueue(
      this._queueName,
      Buffer.from(JSON.stringify(message))
    );

  public receiveMessageToQueue = async () => {
    let data;
    await this._channel.consume(this._queueName, (message) => {
      data = JSON.parse(JSON.stringify(message.content.toString()));
      this._channel.ack(message);
      return data;
    });
    return data;
  };

  get channel(): any {
    return this._channel;
  }

  get queueName(): string {
    return this._queueName;
  }
}
