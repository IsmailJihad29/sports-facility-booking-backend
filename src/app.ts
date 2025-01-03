import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
// import config from './app/config';
import path from "path";

const app: Application = express();

// parsers
app.use(express.json());
const allowedOrigins = [ ]; // Add your frontend URL(s) here
app.use(cors({
  origin: [ "https://sports-facility-booking-backend-jet.vercel.app" ,'http://localhost:3000','https://game-ground-ass5.vercel.app', 'http://localhost:5173'] ,// Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // HTTP methods you want to allow
  credentials: true, // For cookies/authentication
}));


app.use(express.static(path.join(__dirname, "public")));

const getAController = (req: Request, res: Response) => {
  res.send(
    "Hello, Next level Developer!. This project is about sports booking platform"
  );
};
// applications
app.get("/", getAController);
app.use("/api", router);

app.use(globalErrorHandler);

// NOt Found
app.use(notFound);

export default app;
