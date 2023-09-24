import Express from "express";
import {
  CrearUsuario,
  ObtenerUsuario,
  LoguearUsuario,
} from "../controllers/user-controller.js";
import { TomarBienvenida } from "../controllers/Welcome.js";

const router = Express.Router();

router.get('/', TomarBienvenida)
router.get("/user", ObtenerUsuario);
router.post("/user/register", CrearUsuario);
router.post("/user/login", LoguearUsuario);

export default router;
