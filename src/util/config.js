import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: parseInt(process.env.PORT) || 5000,
};
