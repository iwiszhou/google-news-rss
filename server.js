import express from "express";
import cors from "cors";

import { allRoutes } from "./src/routes.js";
// create an express app

const app = express();

const whitelist = [
  "https://www.freshinfo24.com",
  "http://www.freshinfo24.com",
  "https://freshinfo24.com",
  "http://freshinfo24.com",
  //   "http://localhost:8081",
];

// use the middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// define the first route
allRoutes(app);

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
