const http = require('http')
const fs = require('fs')
const path = require('path');
const mime = require('mime-types')
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {

  let file = path.resolve('public', 'index.html')

  res.sendFile(file);

})

app.use("/dist", express.static(__dirname + "/dist"));

app.listen(3500)

console.log('Server on port 3500')