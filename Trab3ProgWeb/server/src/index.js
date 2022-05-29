require("dotenv").config();
const { response, request } = require("express");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", require("./routes/clientesRoutes"));
app.use("/apiTwo", require("./routes/produtosRoutes"));
app.use(require("./middlewares/errorHandlerMiddleware"));

app.listen(PORT, () => console.log("O servidor está rodando na porta: " + PORT))