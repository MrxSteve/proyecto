import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const CONFIG = {
    MONGO_URL: process.env.MONGO_URL || "",
};

export default CONFIG;