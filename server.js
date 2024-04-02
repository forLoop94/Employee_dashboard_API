import express from "express";
import userRouter from "./routes/api/users.js";
import connectDB from "./db.js";

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
});

app.use("/api/users", userRouter);
