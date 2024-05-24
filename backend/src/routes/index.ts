import { RequestHandler, Router } from "express";
import User from "../models/user";

const router = Router();

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
router.get<RequestHandler>("/api/me", async (_, res) => {

    const user = new User(({
        name: "Steve",
        email: "steve@steve.com",
        token: "1234",
        socialType: 1,
        socialName: "google",
    }));

    await user.save(); //NOj6zxmCf0PUbSwg <-- contra mongo

    // authOptions
    res.json({ isAuth: false, user });
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
  


export default router;