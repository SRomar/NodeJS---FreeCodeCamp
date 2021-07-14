const express = require('express')
const app = express()

//app.listen
app.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})

//app.get
app.get('/',(req, res)=>{
    res.status(200).send('Home Page')
})

app.get('/about', (req, res)=>{
    res.status(200).send('About Page')
})

//app.all
app.all('*', (req, res)=>{
    res.status(404).send('<h1>Resource not found.</h1>')
})
//app.post

//app.put

//app.delete



