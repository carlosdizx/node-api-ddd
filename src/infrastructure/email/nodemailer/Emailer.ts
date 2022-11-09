import nodemailer from "nodemailer";

const createTrans = () =>
  nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8c2c34fef394c1",
      pass: "589d7aba545d62",
    },
  });

const sendMail = async () => {
  const transport = createTrans();
  const info = await transport.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    to: "bar@example.com, baz@example.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });

  console.log("Message sent: %s", info.messageId);
};

export default sendMail;
