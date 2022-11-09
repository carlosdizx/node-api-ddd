import nodemailer from "nodemailer";
import fs from "fs";
const emailSender = process.env.EMAIL_NODEMAILER_EMAIL_SENDER;

const createTrans = () =>
  nodemailer.createTransport({
    host: process.env.EMAIL_NODEMAILER_HOST,
    port: parseInt(process.env.EMAIL_NODEMAILER_PORT),
    auth: {
      user: process.env.EMAIL_NODEMAILER_USER,
      pass: process.env.EMAIL_NODEMAILER_PASS,
    },
  });

export const sendMailUserRegister = async (email: string) => {
  const transport = createTrans();
  let template = "";
  const file = await fs.createReadStream(
    "src/infrastructure/email/nodemailer/assets/UserRegister.html",
    { encoding: "utf-8" }
  );

  const readTemplate = new Promise(async (resolve: Function) => {
    await file.on("data", async (data) => {
      if (typeof data === "string") {
        template += data;
        template = template.replace(/{{email}}/gi, email);
        resolve(template);
      }
    });
  });
  const sendMail = new Promise(async () => {
    setTimeout(async () => {
      const info = await transport.sendMail({
        from: `GCEU <${emailSender}>`,
        to: email,
        subject: "Bienvenido a GCEU",
        text: "Es un gusto tenerte en nuestro equipo",
        html: template,
      });
      console.log("Email send: %s", info.messageId);
    }, 5000);
  });
  readTemplate
    .then(() => {
      return sendMail;
    })
    .then();
};
