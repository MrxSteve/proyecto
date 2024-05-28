import { Request, Response, NextFunction, RequestHandler, Router } from "express";
//import User from "../models/user";
import PASSPORT_STRATEGIES, {Strategies} from "../controllers/passport/strategies";
import passport from "passport";
import CONFIG from "../config";


const router = Router();

/**
 * Middleware que valida si el usuario ya está autenticado
 * @param req
 * @param res
 * @param next
 * @returns
 */
const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }

  next();
};


const urlRedirect = {
    successRedirect: "/api/successlogin",
    failureRedirect: "/api/successlogin",
};

/**
 * Router que se ejecuta cuando se ha realizado al autenticación del usuario
 */
router.get<RequestHandler>("/api/successlogin", (req, res) => {
    if (req.isAuthenticated()) {
      res.redirect("/online");
    } else {
      res.redirect("/");
    }
  });

/**
 * Router que trae la información del usuario que este auénticado
 */
router.get<RequestHandler>("/api/me", (req, res) => {


    /**
   * Se obtienen los datos de las estrategías de auteticación configuradas
   * y que estén habilitadas
   */
  const authOptions = Object.keys(PASSPORT_STRATEGIES)
  .filter((v) => PASSPORT_STRATEGIES[v as Strategies].isEnabled)
  .map((v) => {
    const { socialName, routerURL } = PASSPORT_STRATEGIES[v as Strategies];
    return { socialName, routerURL };
  });  

    /**
     * Si esta autentificado se obtiene la data del usuario y se envia al cliente
     */
    if (req.isAuthenticated()) {
        const { name, _id, photo } = req.user || {};

        return res.json({
            isAuth: true,
            authOptions,
            roomRange: CONFIG.ROOM_SIZE_RANGE,
            user: {name, id: _id, photo},
        });
    }

    // se ejecuta si el usuario no esta autentificado
    res.json({ isAuth: false, authOptions, roomRange: CONFIG.ROOM_SIZE_RANGE }); // user
});

/**
 * Para hacer el logout del usuario
 */
router.get<RequestHandler>("/api/logout", (req, res) => {
    if (req.isAuthenticated()) {
      req.logout();
    }
  
    res.redirect("/");
});
  
/**
 * Crear los routes de forma dinámica para las estrategías que estén configuradas
 * Por ejemplo si está configurado github sería:
 * router.get("/api/auth/github", passport.authenticate("github", scope));
 * router.get("/api/auth/github/callback", passport.authenticate("github", urlRedirect))
 */
Object.keys(PASSPORT_STRATEGIES).forEach((strategy) => {
    const { callbackURL, routerURL, socialName, scope, isEnabled } =
      PASSPORT_STRATEGIES[strategy as Strategies];
  
    //Se valida que la estrategía este habilitada
    if (isEnabled) {
        //.log({ routerURL, callbackURL, socialName });
      // Para la url que inicia el proceso de aitenticación con el servicio
      router.get(routerURL, isLoggedIn, passport.authenticate(socialName, scope));
  
      // Ruta a la cual responde el servicio una vez se ha realizado la autenticación
      router.get(callbackURL, passport.authenticate(socialName, urlRedirect));
    }
  });


export default router;