import express from "express";
import userRouter from "./routes/api/userRouter.js";
import authRouter from "./routes/api/authRouter.js";
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
app.use("/api/auth", authRouter);
