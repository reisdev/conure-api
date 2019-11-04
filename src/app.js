import Koa from "koa";
import cors from "koa-cors";
import morgan from "koa-morgan";
import helmet from "koa-helmet";
import { bodyParser } from "./middlewares";
import { Logger } from "./loaders";
import router from "./routes";

class App extends Koa {
  constructor(...params) {
    super(...params);
    this.applyMiddlewares();
  }
  applyMiddlewares() {
    this.use(cors());
    this.use(morgan("tiny", { stream: Logger.stream }));
    this.use(helmet());
    this.use(
      bodyParser({
        enableTypes: ["json"]
      })
    );
    this.use(router.routes(), router.allowedMethods());
  }
}

export default App;
