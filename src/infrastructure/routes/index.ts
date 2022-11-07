import express from "express";
import UserRoute from "./UserAuthRoute";
import UserAuthRoute from "./UserRoute";

export const initRoutes = (app: express.Express) => {
    app.use("/users", UserRoute);
    app.use("/users", UserAuthRoute);
};
