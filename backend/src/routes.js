const { Router } = require("express");
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

const routes = Router();

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

routes.get("/search", SearchController.index);

module.exports = routes;

//METODOS HTTP: GET, POST, PUT, DELETE

//TIPOS DE PARAMETROS:

//Query params: req.query (filtros, ordenação, paginação, ...)
//Route params: req.params (identificar um recurso na alteração ou deleção)
//Body: req.body (Dados para criação ou alteração de registro)
