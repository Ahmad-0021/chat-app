const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const dbConnect = require("./db/db-connection");
const userRoute = require("./routes/userRouter");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();
dbConnect();

const PORT = process.env.PORT || 3000;

// Use cors middleware with options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hey");
});

app.use("/api/user", userRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
