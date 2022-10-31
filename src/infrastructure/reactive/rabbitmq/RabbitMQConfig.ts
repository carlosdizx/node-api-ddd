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

  publishMessage = async (
    exchange: string,
    type: string,
    routingKey: string,
    message: any
  ) => {
    if (!this.channel) {
      await this.createChannel();
    }

    await this.channel.assertExchange(exchange, type);

    await this.channel.publish(
      exchange,
      routingKey,
      Buffer.from(JSON.stringify(message))
    );
  };

  listenerMessages = async (queue: string) => {
    if (!this.channel) {
      await this.createChannel();
    }

    let data = "hola";
    await this.channel.consume(queue, (message) => {
      data = JSON.parse(JSON.stringify(message.content.toString()));
      this.channel.ack(message);
    });
    return data;
  };
}
