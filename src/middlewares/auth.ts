import jwt from "jsonwebtoken";

import config from "../../config";

export async function Auth(ctx: any, next: any) {
  if (!ctx.headers["authorization"] && !ctx.request.url.startWith("/gql"))
    ctx.throw(401, "Missing Authorization token");
  else {
    if (ctx.headers["authorization"].startsWith("Bearer ")) {
      try {
        const token = ctx.headers["authorization"].split(" ")[1];
        const data = await jwt.verify(token, config.jwt_secret, {
          algorithms: ["HS256"]
        });
      } catch (e) {
        ctx.throw(401, "Invalid JSONWebToken");
      }
    }
  }
  return next();
}
