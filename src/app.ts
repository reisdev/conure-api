import Koa from "koa";
import cors from "koa-cors";
import morgan from "koa-morgan";
import helmet from "koa-helmet";
import { ApolloServer } from "apollo-server-koa";
import { bodyParser } from "./middlewares";
import { stream } from "./loaders";
import router from "./routes";

class App extends Koa {
  constructor(params?: any) {
    super();
    this.applyMiddlewares();
  }
  applyMiddlewares() {
    this.use(cors());
    this.use(morgan("tiny", { stream: stream }));
    this.use(helmet());
    this.use(
      bodyParser({
        enableTypes: ["json"]
      })
    );
    this.use(router.allowedMethods());
  }
}

export default App;
