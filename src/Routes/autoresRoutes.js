import express from "express";
import AutorController from "../controllers/AutorController.js"

const routes = express.Router();

routes.get("/autor",AutorController.listarAutores);
routes.get("/autor/:id",AutorController.listarAutorPorID);
routes.post("/autores",AutorController.cadastrarAutor);
routes.put("/autor/:id",AutorController.atualizarAutor);
routes.delete("/autor/:id",AutorController.excluirAutor);



export default routes;