import config from "config";
import { sofaMiddleware, generateSwaggerDoc } from "./sofa.js";
import { swaggerServe, loadSwaggerDocumentation } from "./swagger.js";

const REST_BASE = config.get("server.restBase");

const useMiddlewares = async (app) => {
  // Use Sofa to generate RESTful API from GraphQL – https://github.com/Urigo/SOFA
  app.use(REST_BASE, sofaMiddleware);
  generateSwaggerDoc();
  const swaggerDocMiddleWare = await loadSwaggerDocumentation();
  // Use Swagger to generate RESTful API documentation – https://github.com/scottie1984/swagger-ui-express
  app.use(`${REST_BASE}/docs`, swaggerServe, swaggerDocMiddleWare);
};

export default useMiddlewares;
