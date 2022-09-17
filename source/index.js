import express from "express";
import morgan from "morgan";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// RUTAS
import indexRoutes from "./routes/index.js";

// INICIALIZANDO EXPRESS
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// CONGIGURACIONES
app.set("port", process.env.PORT || 3000);
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

// PROGRAMAS INTERMEDIOS
app.use(morgan("dev"));

// MÁS RUTAS
app.use(indexRoutes);

// ARCHIVOS ESTÁTICOS
app.use(express.static(join(__dirname, "public")));

// ESCUCHANDO A EL SERVIDOR
app.listen(app.get("port"));
console.log("Server on port", app.get("port"));