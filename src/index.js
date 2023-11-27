import http from "http";
import config from "./util/config.js";

(async () => {
  const { default: app } = await import("./app.js");
  const server = await app.setup();
  const httpServer = new http.Server(server);
  httpServer.listen(config.PORT, () =>
    console.log(`Express Server listening to port ${config.PORT}`)
  );
})();
