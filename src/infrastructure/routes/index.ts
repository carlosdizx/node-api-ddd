import express from "express";
import UserRoute from "./user/UserAuthRoute";
import UserAuthRoute from "./user/UserRoute";

export const initRoutes = (app: express.Express) => {
    app.use("/users", UserRoute);
    app.use("/users", UserAuthRoute);
};
