const express = require('express')
const app = express()
const logger = require('../logger')
const authorize = require('./authorize')
// req => middleware => res
app.use([authorize, logger]) //se ejecutan en orden 

app.use(logger); // se aplica a todas las rutas

app.use('/api', logger)//se aplica a todas las rutas que empiecen por '/api'

app.get('/', logger,(req,res)=>{ //express se encargan de enviar los parámetros del middleware
    res.send('Home')
})

app.get('/About', [authorize, logger],(req,res)=>{
    res.send('About')
})
app.listen(5000, ()=>{
    console.log('Server is listening on port 5000')
})