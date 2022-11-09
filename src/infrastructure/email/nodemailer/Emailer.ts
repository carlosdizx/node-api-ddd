import nodemailer from "nodemailer";
const emailSender = "gceu@mail.com";

const createTrans = () =>
  nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8c2c34fef394c1",
      pass: "589d7aba545d62",
    },
  });

export const sendMailUserRegister = async (email: string) => {
  const transport = createTrans();
  const info = await transport.sendMail({
    from: `GCEU <${emailSender}>`,
    to: email,
    subject: "Bienvenido a GCEU",
    text: "Es un gusto tenerte en nuestro equipo",
    html: "<b>Hey que tal amigo?</b>" + "<br />" + "<h2>Hola bienvenido a GCEU</h2>",
  });

  console.log("Message sent: %s", info.messageId);
};
