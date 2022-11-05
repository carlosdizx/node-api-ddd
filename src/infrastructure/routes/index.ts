import express from "express";
import UserRoute from "./UserRoute";

export const initRoutes = (app: express.Express) => {
  app.use("/users", UserRoute);
};
