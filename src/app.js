import express from "express";
import useMiddleWare from "./middleware/index.js";
import customErrorHandler from "./util/CustomErrorHandler.js";
import apiServiceRoutes from "./routes/app.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class app {
  static async setup() {
    const app = express();

    //middleware
    useMiddleWare(app);
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("/api/health", (req, res) => {
      res.status(200).json({
        status: true,
        statusCode: res.statusCode,
        message: "Health Check",
        data: "OK",
      });
    });

    //All Routes
    apiServiceRoutes(app);
    app.get("/*", (req, res) => {
      res.sendFile(path.join(__dirname, "../", "client", "dist", "index.html"));
    });

    // Custom Error Handler
    app.use(customErrorHandler);

    return app;
  }
}
