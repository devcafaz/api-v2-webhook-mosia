import express from 'express'
import 'dotenv/config'

const app = express()
const {PORT} = process.env

app.get("/", (req,res) => {
    res.send("Hello World!")
})

app.listen(PORT, ()=>{
    console.log("Servidor rodando!")
})