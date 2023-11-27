import routes from "./todo.routes.js";

const apiServiceRoutes = (app) => {
  app.use("/api", routes);
};

export default apiServiceRoutes;
