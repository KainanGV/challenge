import "reflect-metadata";
import express from "express";

import { router } from "./router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

export default app;
