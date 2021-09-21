import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/config";
import path from "path";

import userRoutes from "./routes/users";
import { errorHandler, notFound } from "./middleware/errorMiddleware";

dotenv.config();

connectDB();

const app = express(); // main thing

app.use(express.json()); // to accept json data
app.use(cors());
app.use("/v1", userRoutes);

// --------------------------deployment------------------------------
const __dirname = path.resolve();

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
