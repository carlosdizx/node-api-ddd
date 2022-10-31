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
  private channel: any;

  async createChannel() {
    const connection = await amqp.connect(rabbitSettings);
    this.channel = await connection.createChannel();
  }

  async publishMessage(
    exchange: string,
    type: string,
    routingKey: string,
    message: any
  ) {
    if (!this.channel) {
      await this.createChannel();
    }

    await this.channel.assertExchange(exchange, type);

    const logDetails = {
      logType: routingKey,
      message: message,
      dateTime: new Date(),
    };
    await this.channel.publish(
      exchange,
      routingKey,
      Buffer.from(JSON.stringify(logDetails))
    );
  }
}
