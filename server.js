const path = require('path');
const data = require('./src/data/products.json')
const express = require('express');
const dotenv = require('dotenv')
const app = express();


dotenv.config()

app.use(express.json());

app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'public')));

app.use("/dist", express.static(__dirname + "/dist"));


app.get('/', (req, res) => {

  let file = path.resolve('public', 'index.html')

  res.sendFile(file);

})

// API  

app.get('/api/data', (req, res) => {

  res.json(data)

})

app.get('/api/data/:id', (req, res) => {

  const id = Number(req.params.id);

  const product = data.find(product => product.id === id);

  if (product) {

      res.json(product);

  } else {

      res.status(404).end('Not found');

  }

})


app.delete('/api/data/:id', (req, res) => {

  const id = req.params.id;

  data = data.filter(product => product.id != id);

  res.status(204).end('No content')

})

app.post('/api/data', (req, res) => {

  const product = req.body;

  if(!product || !product.content) {
      return res.status(400).json({
          error: 'product.content is missing'
      })
  }

  const ids = data.map(product => product.id)
  const maxId = Math.max(...ids)

  const newProduct = {

      id : maxId++,
      "name": product.name,
      "maker": product.maker,
      "material": product.material,
      "theme": product.theme,
      "price": product.price,
      "stock": product.stock,
      "stars": product.stars,
      "description": product.description,
      "image": product.image,
      "buys": product.buys,
      "guarantee": product.guarantee
  }

  data = [...data, newProduct]

  res.json(newProduct);
})


const PORT = process.env.PORT;

app.locals.baseuUrl = process.env.HOST + ':' + PORT;



app.listen(PORT, () => {

  console.log(`Server on port ${PORT}`)

})
