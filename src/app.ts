
import express, { Express } from "express"

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


export default app