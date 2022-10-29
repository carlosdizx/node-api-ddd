import amqplib from "amqplib/callback_api";

const rabbitmq: string = process.env.RABBIT_MQ;

export class RabbitMQConfig {
  private readonly queue: string;

  constructor(queue: string) {
    this.queue = queue;
  }

  connect = () => {
    amqplib.connect(rabbitmq, (err, conn) => {
      if (err) throw err;

      conn.createChannel((err, ch2) => {
        if (err) throw err;

        ch2.assertQueue(this.queue);
        ch2.consume(this.queue, (msg) => {
          if (msg !== null) {
            console.log(msg.content.toString());
            ch2.ack(msg);
          } else {
            console.log("Consumer cancelled by server");
          }
        });
      });

      conn.createChannel((err, ch1) => {
        if (err) throw err;
        ch1.assertQueue(this.queue);

        setInterval(() => {
          ch1.sendToQueue(this.queue, Buffer.from("something to do"));
        }, 1000);
      });
    });
  };
}
