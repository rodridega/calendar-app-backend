const { Router } = require("express");
const { check } = require("express-validator");
const {
  getEventos,
  actualizarEventos,
  eliminarEvento,
  crearEvento,
} = require("../controllers/events");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const {isDate} = require("../helpers/isDate")

const router = Router();

router.use(validarJWT);

//Obtener eventos
router.get("/", getEventos);

router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "la fecha de inicio es obligatoria").custom(isDate),
    check("end", "la fecha de finalización es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

router.put("/:id", actualizarEventos);

router.delete("/:id", eliminarEvento);

module.exports = router;
