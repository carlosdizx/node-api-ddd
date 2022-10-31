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

const rabbitMQInit = async (queueListener: string, queueSender: string) => {
  const conn = await amqplib.connect(rabbitSettings);

  const ch1 = await conn.createChannel();
  await ch1.assertQueue(queueListener);

  ch1.consume(queueListener, (msg) => {
    if (msg !== null) {
      console.log(
        "Recieved:",
        JSON.parse(JSON.stringify(msg.content.toString()))
      );
      ch1.ack(msg);
    } else {
      console.log("Consumer cancelled by server");
    }
  });

  const ch2 = await conn.createChannel();
  await ch2.assertQueue(queueSender);

  ch2.sendToQueue(
    queueSender,
    Buffer.from(JSON.stringify({ id: 1, name: "carlos" }))
  );
};

export default rabbitMQInit;
