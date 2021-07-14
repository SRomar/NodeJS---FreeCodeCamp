const express = require('express')
const app = express();

const {products} = require('./02-express-tutorial/data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products',(req, res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProducts)
})

//route parameter
app.get('/api/products/:productID',(req, res)=>{
   
    //const singleProduct = products.find((product)=> product.id === 1) //sin route parameter
   
    const {productID} = req.params;
    const singleProduct = products.find((product)=> product.id === Number(productID)) //con route parameter, hay q parsear el input si en el json es entero
   
   if(!singleProduct){
    res.status(404).send('Product does not exist.');
   }
   res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) =>{
    const {search,limit}= req.query
    let sortedProducts = [...products] 

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        })
    } 
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    if(sortedProducts.length < 1){
        ///res.status(200).send('no products matched your search')
        return res.status(200).json({success:true, data:[]})
    }
    return res.status(200).json(sortedProducts)
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})