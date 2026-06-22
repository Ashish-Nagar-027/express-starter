
import express, { Express } from "express"
import { errorHandler } from "./middlewares/errorHandler.middleware"
import { routeNotFound } from "./middlewares/route-not-found"
import v1Router from "./routers/v1"

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded())





app.get('/health', (_req ,res) => {
    console.log("Execute health route")

    res.json({
        status: "ok!",
        timestamp: new Date().toISOString()
    })
})

// route not found
app.use(routeNotFound)

// error Handler
app.use(errorHandler)



export default app