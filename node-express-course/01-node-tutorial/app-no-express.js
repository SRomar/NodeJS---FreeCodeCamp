const http = require('http');
const {readFileSync} =require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((req, res) => {
    const url = req.url;
    //Home page
    if(url === "/"){

        res.writeHead(200,{'content-type':'text/html'}) //Headers
        res.write(homePage) //Body
        res.end()
    } 
    //About page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'}) //Headers
        res.write('<h1>About</h1>') //Body
        res.end()
    }
    //Styles
    else if(url === '/styles.css'){
    res.writeHead(200,{'content-type':'text/css'}) //Headers
    res.write(homeStyles) //Body
    res.end()
    }
    //Image
    else if(url === '/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'}) //Headers
        res.write(homeImage) //Body
        res.end()
    }
    //Logic
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'}) //Headers
        res.write(homeLogic) //Body
        res.end()
    }
    
    //404
    else{
        res.writeHead(404,{'content-type':'text/html'}) //Headers
        res.write('<h1>Resource not found.</h1>') //Body
        res.end()
    }
})

server.listen(5000, ()=>{

})