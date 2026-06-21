import app from "./app";
import { PORT } from "./config/env";


async function startServer() {
    app.listen(PORT, async () => {
        console.log(`[server]: Running on port ${PORT}`);
    });
}


startServer().catch((err) => {
    console.error('[Server]: Failed to start', err);
    process.exit(1);
})