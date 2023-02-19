const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

const port =  process.env.PORT || 5000;

const DeliveredRouter = require('./Routers/Delivered');
const { env } = require('process');

app.use(bodyparser.json());
app.use(cors());
//img
app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.get('/', (req, res)=>{
    console.log("server running");
    return res.send("welcome to server 5000");
});

app.use('/upload', DeliveredRouter);



app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

