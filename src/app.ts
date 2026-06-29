
import express, { Express } from "express"
import { errorHandler } from "./middlewares/errorHandler.middleware"
import { routeNotFound } from "./middlewares/route-not-found"
import v1Router from "./routers/v1"
import morgan from "morgan"
import { NODE_ENV } from "./config/env"

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded())

// morgan
app.use(morgan(NODE_ENV === 'production' ? "combined" : "dev"))


// routes
app.use('/api/v1', v1Router)

// health route
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