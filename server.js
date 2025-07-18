const express = require("express")
const connectDB = require("./db/connect");
require ("dotenv").config()


const app = express()
const PORT = process.env.PORT || 3214 



app.use(express.json());
app.use(express.urlencoded({ extended: true }));



















connectDB()


app.use("/api/auth",require("./routes/auth.route"))
app.use("/api/todo",require("./routes/todo.route"))
app.use("/api/user",require("./routes/user.route"))








app.listen(PORT, () => {
    console.log(`app is running like a dog ${PORT}`);
})















