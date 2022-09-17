import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Primera web con NodeJS" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "Acerca de la primera página con NodeJS" });
});

router.get("/contact", (req, res) => {
  res.render("contacto", { title: "Página de contacto" });
});

export default router;