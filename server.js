const express = require("express");
const app = express();
const connectDB = require("./config/db")
//connect database
connectDB();

app.get('/', (req,res)=> res.send('API Running'))
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));