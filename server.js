const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const Users = require("./routes/Users.js");

app.use("/users", Users);

app.listen(PORT, () => {
    console.log("Server is running on port" + PORT);
});