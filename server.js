const express = require("express")
const connectDB = require("./db/connect");


const app = express()
const port = 6000



app.use(express.json());
app.use(express.urlencoded({ extended: true }));



















connectDB()


app.use("/api/auth",require("./routes/auth.route"))
app.use("/api/todo",require("./routes/todo.route"))
app.use("/api/user",require("./routes/user.route"))








app.listen(port, () => {
    console.log(`app is running like a dog ${port}`);
})















