const express = require("express")
const connectDB = require("./db/connect");


require ("dotenv").config()


const app = express()
const PORT = process.env.PORT || 3214 



app.use(express.json());
app.use(express.urlencoded({ extended: true }));



















connectDB()


app.use("/auth",require("./routes/auth.route"))
app.use("/todo",require("./routes/todo.route"))
app.use("/user",require("./routes/user.route"))








app.listen(PORT, () => {
    console.log(`app is running like a dog ${PORT}`);
})















