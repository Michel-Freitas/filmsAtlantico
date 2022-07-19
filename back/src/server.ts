import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();

app.use(
    cors({
        origin: "*"
    })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT,
    () => { console.log(`Server running at port ${PORT}`)}
);