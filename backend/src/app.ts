import apiRoute from "./routes";
import compression from "compression";
import express, {
    NextFunction,
    Request,
    RequestHandler,
    Response,
  } from "express";
import helmet from "helmet";
import http from "http";
import path from "path";
import connectDB from "./db/mongo";
import redisStore from "./db/redis";
import session from "express-session";
import cookieParser from "cookie-parser";
import CONFIG from "./config";
import passport from "passport";
import passportController from "./controllers/passport";
import { start } from "repl";
import startSocketServer from "./models/sockets";

passportController();

const app = express();
const PORT = process.env.PORT || 3000;

// const server = app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });

const server = http.createServer(app);

// Para servir los archivos estáticos del juego
app.use(express.static(path.join(__dirname, "/public")));

app.use(helmet());
app.use(helmet.hidePoweredBy());

// Para compresión de archivo gzip
app.use(compression());
app.use(express.json());
app.enable(("trust proxy"));

//Estable que si se esta ejecutando en produccion al estar en true habilitara las propiedades 
//de secure y httOnly, indicando que solo se transfier cookies por una navegacion segura (https)
const isProduction = process.env.NODE_ENV === "production";


/**
 * Para la creación de la sesión...
 */
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

/**
 Se relaciona passport con express
 */
 app.use(passport.initialize());
 app.use(passport.session());
 
 /**
  * Se agrega el usaurio al request
  */
 app.use((req, res, next) => {
   res.locals.user = req.user || null;
   next();
 });



/**
 * Para agregar el router para el api
*/
app.use(apiRoute);


/**
 * Captura los errores que puedan exitir
 */
app.use((error: Error, _: Request, res: Response, _2: NextFunction) => {
    res.status(500).json({ message: error.message });
  });

  // Maneja los demás requests que no se ajusten a los rutas definidas
  app.get<RequestHandler>("*", (_, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
  });

  /**
 * Conecta a la base de datos
 * Si es exitoso, sube el server
 */
connectDB((error) => {
  // La conexión a mongo fue exitosa
  if (!error) {
    console.log("MongoDB connected successfully!");

    // Se configura los sockets...
    startSocketServer(server, sessionMiddleware);

    // Se sube el server
    return server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  }

  console.error("MongoDB connection error:", error);
});

