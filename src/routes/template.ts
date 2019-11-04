import { ExtendableContext } from "koa"

export default {
    get: (ctx: ExtendableContext, next: Function) => {
        ctx.status = 404
    }
}