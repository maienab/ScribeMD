import express from "express"
import cors from "cors";
import routes from "./routes.ts";

import dotenv from "dotenv";
dotenv.config();


const PORT = process.env.PORT || 3000;
const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.use(express.json());
app.use("/api", routes);


app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
