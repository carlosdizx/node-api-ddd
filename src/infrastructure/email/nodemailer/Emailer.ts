import nodemailer from "nodemailer";
import fs from "fs";
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
  let template = "";
  const file = await fs.createReadStream(
    "src/infrastructure/email/nodemailer/assets/UserRegister.html",
    { encoding: "utf-8" }
  );

  const readTemplate = new Promise(
    async (resolve: Function, reject: Function) => {
      await file.on("data", async (data) => {
        if (typeof data === "string") {
          template += data;
          resolve(template);
        }
      });
    }
  );
  const sendMail = new Promise(async (resolve: Function, reject: Function) => {
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
