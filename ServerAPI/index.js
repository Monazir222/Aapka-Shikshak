import express from "express";
import cors from "cors";

// const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
     res.send("aapka shikshak !");
});

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} Connected`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();

  
// app.listen(5500, () => {
//     console.log("Connected to backend.!!");
//   });