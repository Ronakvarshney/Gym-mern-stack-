const express = require("express");
const app = express();

const cors = require("cors"); // it help to connect frontend with backend
const cookieParser = require("cookie-parser"); // is used to read cookie
const bodyparser = require("body-parser"); // it is used to read data from body

app.use(express.json()); // data is in form of json format
app.use(bodyparser.urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(cookieParser());

const db = require("./config/database");
db();

// app.post('/api/register', async (req, res) => {
//     console.log(req.body);  // Corrected this line
//     res.send('Data received');  // Respond to the frontend to avoid hanging
// });
const router = require("./routes/index");

app.use(router);

app.listen(3000, () => {
  console.log("server started at port 3000");
});
