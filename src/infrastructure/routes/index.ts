import express from "express";
import userAuthRoute from "./user/UserAuthRoute";
import userRoute from "./user/UserRoute";
import personRoute from "./person/PersonRoute";

export const initRoutes = (app: express.Express) => {
  app.use("/users/data", userRoute);
  app.use("/users/auth", userAuthRoute);
  app.use("/persons/", personRoute);
};
