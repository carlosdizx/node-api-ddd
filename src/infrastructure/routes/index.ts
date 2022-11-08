import express from "express";
import userAuthRoute from "./user/UserAuthRoute";
import userRoute from "./user/UserRoute";
import personRoute from "./person/PersonRoute";
import roleRoute from "./role/RoleRoute";
import userRoleRoute from "./role/UserRoleRoute";

export const initRoutes = (app: express.Express) => {
  app.use("/users/data", userRoute);
  app.use("/users/auth", userAuthRoute);
  app.use("/persons/", personRoute);
  app.use("/roles/", roleRoute);
  app.use("/user-role/", userRoleRoute);
};
