require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bookRoute = require("./Routes/bookRoutes");
const authorRoute = require("./Routes/authorRoutes");
const registerRoute = require("./Routes/registerRoutes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/books", bookRoute);
app.use("/api/authors", authorRoute);
app.use("/api/register", registerRoute);
/* app.use("/notification");
app.use("/comment"); */

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(
        "Connected to database and listening on port : " + process.env.PORT
      )
    )
  )
  .catch((err) => console.log("Error connecting to the database : " + err));
