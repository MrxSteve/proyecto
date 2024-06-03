const apiRoute = require("./routes");
const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const http = require("http");
const path = require("path");
const connectDB = require("./db/mongo");
const redisStore = require("./db/redis");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const CONFIG = require("./config");
const passport = require("passport");
const passportController = require("./controllers/passport");
const startSocketServer = require("./models/sockets");

passportController();

const app = express();
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "/public")));

app.use(helmet());
app.use(helmet.hidePoweredBy());

app.use(compression());
app.use(express.json());
app.enable("trust proxy");

const isProduction = process.env.NODE_ENV === "production";

app.use(cookieParser());

const sessionMiddleware = session({
  secret: CONFIG.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: redisStore,
  cookie: {
    secure: isProduction,
    httpOnly: isProduction,
    maxAge: new Date(Date.now() + 5184000000).getTime(),
  },
});

app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

app.use(apiRoute);

app.use((error, _, res, __) => {
  res.status(500).json({ message: error.message });
});

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

connectDB((error) => {
  if (!error) {
    console.log("MongoDB connected successfully!");
    startSocketServer(server, sessionMiddleware);
    return server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  }
  console.error("MongoDB connection error:", error);
});
