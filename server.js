import express from "express";
import cors from "cors";

import { allRoutes } from "./src/routes.js";
// create an express app

const app = express();

// use the middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// define the first route
allRoutes(app);

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
