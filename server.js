const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//require Route files

const indexRouter = require('./app/routes/index')
const stationsRouter = require('./app/routes/stations')
const carsRouter = require('./app/routes/cars')
const userRouter = require('./app/routes/users')

//reqire DB CONfig file
const db = require("./config/db");

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("connected to Mongo");
});
const app = express();

//define port for the api to run on
const port = process.env.PORT || 5000;
const reactPort = 3000;

//middleware

app.use(express.json());
app.use(
  cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` })
);

/**routes */

app.use(indexRouter)
app.use(stationsRouter)
app.use(carsRouter)
app.use(userRouter)



// C U R D
//...R
//....READ ALL ---> index

//....READ ONE BY ID ----> show
//...create
//...Update
//...Delete

//define port for api in to sepertate variable

app.listen(port, () => {
  console.log(`Car rent is LISTENING on port:${port}`);
});
