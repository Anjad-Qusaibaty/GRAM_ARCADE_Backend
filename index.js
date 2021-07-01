const express = require("express");
const Cors = require("cors");
const app = express();
const playersRouter = require("./routers/player");
const wkRouter = require("./routers/karlaRouter");
const { PORT } = require("./config/constants");

app.listen(PORT, console.log(`Listening on port ${PORT}`));

app.use(Cors());
app.use(express.json());

app.use("/supermat", playersRouter);
app.use("/wonderkarla", wkRouter);
