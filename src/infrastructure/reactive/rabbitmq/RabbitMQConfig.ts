import amqp from "amqplib";

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
  private _channel: any;

  async createChannel() {
    const connection = await amqp.connect(rabbitSettings);
    this._channel = await connection.createChannel();
  }

  publishMessage = async (
    exchange: string,
    type: string,
    routingKey: string,
    message: any
  ) => {
    if (!this._channel) {
      await this.createChannel();
    }

    await this._channel.assertExchange(exchange, type);

    await this._channel.publish(
      exchange,
      routingKey,
      Buffer.from(JSON.stringify(message))
    );
  };

  get channel(): any {
    return this._channel;
  }
}
