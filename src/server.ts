import express from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'

const {PORT} = process.env
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", (req,res) => {
    res.send("Hello World!")
})

app.post("/ocorrencia", (req,res)=> {
    console.log(req.body)

    return res.status(200).send('Status ok')
})

app.listen(PORT, ()=>{
    console.log("Servidor rodando!")
})