import Router from "koa-router";

const router = new Router()

router.get("/", async (ctx,next) => {
    ctx.type = "application/json";
    ctx.body = {
        status: 200,
        response: "Welcome to the Conure CMS API"
    }
    return
})

export default router;