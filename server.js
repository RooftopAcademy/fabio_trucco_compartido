const path = require('path');
const express = require('express');
const dotenv = require('dotenv')
const app = express();

dotenv.config()

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {

  let file = path.resolve('public', 'index.html')

  res.sendFile(file);

})

app.use("/dist", express.static(__dirname + "/dist"));

const PORT = process.env.PORT;

app.locals.baseuUrl = process.env.HOST + ':' + PORT;

app.listen(3500, () => {

  console.log('Server on port 3500')

})

