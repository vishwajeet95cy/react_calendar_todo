import express from "express";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import CustomError from "../util/CustomError.js";
import cookieParser from "cookie-parser";

const addMiddleWare = (app) => {
  app.use(
    cors({
      origin: ["*", "http://localhost:5173"],
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
      allowedHeaders:
        "Content-Type,auth-token,Access-Control-Allow-Headers,Origin,credentials,X-Requested-With,Accept",
      credentials: true,
      optionsSuccessStatus: 204,
    })
  );
  app.set("trust proxy", 1);

  // Rate limiter to avoid misuse of the service and avoid cost spikes
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 500, // Limit each IP to 500 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    handler: (_, __, ___, options) => {
      throw new CustomError(
        `There are too many requests. You are only allowed ${
          options.max
        } requests per ${options.windowMs / 60000} minutes`,
        options.statusCode || 500
      );
    },
  });

  // Apply the rate limiting middleware to all requests
  app.use(limiter);

  app.use(express.json({ limit: "100mb" }));
  app.use(express.urlencoded({ limit: "100mb", extended: true }));
  app.use(cookieParser());
};

export default addMiddleWare;
