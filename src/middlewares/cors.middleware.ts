/* eslint-disable @typescript-eslint/explicit-function-return-type */
import cors, { CorsOptions } from "cors";

const whitelist: Array<string> = [
  "*",
  "http://localhost:8080",
  "http://192.168.43.8080"
];

const origin = (origin: any | null, callback: any | null) => {
  if (whitelist.indexOf(origin) !== -1 || !origin) {
    callback(null, true);
  } else {
    callback(new Error("Not Allowed By CORS"));
  }
};

const options: CorsOptions = {
  origin
};

export default cors(options);
