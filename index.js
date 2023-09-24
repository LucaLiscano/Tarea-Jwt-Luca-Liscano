import Express from "express";
import { checkPort, checkDatabaseUrl } from "./src/config/check_enviroment.js";
import router from "./src/routes/router.js";
import "dotenv/config";

const app = Express();

app.use(Express.json());

checkPort(process.env.PORT);
checkDatabaseUrl(process.env.DATABASE_URL);

app.use("/", router);

const port = process.env.PORT;
app.listen(port, () => console.log(`server running on port ${port}`));
