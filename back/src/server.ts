require('dotenv').config();
import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(
    cors({
        origin: "*"
    })
);
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT,
    () => { console.log(`Server running at port ${PORT}`)}
);