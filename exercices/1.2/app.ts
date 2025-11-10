import express, { ErrorRequestHandler } from "express";
import filmRouter from "./routes/films"



const app = express();

app.use((_req, _res, next) => {
  console.log(
    "Time:",
    new Date().toLocaleString("fr-FR", { timeZone: "Europe/Brussels" })
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/films",filmRouter);
console.log("Router /films monté");



const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err.stack);
  return res.status(500).send("Something broke!");
};

app.use(errorHandler);
export default app;