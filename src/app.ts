import compression from "compression";
import express, { Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";

import responseFormat from "./utils/responseFormat.util";

const app = express();

const dburi = `${process.env.DB_URI}`;

mongoose
  .connect(dburi, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("connected with db");
  })
  .catch(e => {
    console.log(e);
  });

app
  .use(helmet())
  .use(compression({ level: 9 }))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(morgan("dev"));

app.use((req: Request, res: Response) => {
  const json = responseFormat("Route Not Found", null, null);
  return res.status(404).json(json);
});

app.use((err: Error, req: Request, res: Response) => {
  if (app.get("env") === "development") {
    const json = responseFormat(err.message, null, null);
    return res.status(500).json(json);
  } else if (app.get("env") === "development") {
    const json = responseFormat("Something Went Wrong", null, null);
    return res.status(500).json(json);
  }
});

export default app;
