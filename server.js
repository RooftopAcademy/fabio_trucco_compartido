const http = require('http')
const fs = require('fs')
const path = require('path');
const mime = require('mime-types')


const myExpress = {

  html: function (res, html) {

    res.writeHead(200, { 

      'Content-Type': 'text/html'

    })

    res.write(html);

    res.end();
    
    return

  },

  JSON: function (res, json) {

    res.writeHead(200, {

      'Content-Type': 'application/JOSN'

    })

    res.write(JSON.stringify(json));

    res.end();

    return;
  },

  sendFile: function(res, path) {

    let content = fs.readFileSync(path);

    res.writeHead(200, {

      'Content-Type': mime.lookup(path)

    })

    res.write(content);

    res.end();
    
    return;

  }
}

http.createServer(function (req, res) {

  if(req.url.includes('.')) {

    let file = path.resolve('C:/fabio_trucco_compartido', 'public', req.url) 

    return myExpress.sendFile(res, file)

  }

  if(req.url === '/'){

    let file = path.resolve('C:/fabio_trucco_compartido', 'public', 'index.html')

    return myExpress.sendFile(res, file)

  }

  // if(req.url == '/favicon.ico'){

  //   return myExpress.sendFile(res, './favicon.ico')
    
  // }

  // if(req.url == '/api/version'){

  //   return myExpress.JSON(res, app)

  // }

  res.writeHead(404)

  res.write('Not found')

  res.end()  //Debe haber un end para que el servidor corte y devuelva

}).listen(3000)