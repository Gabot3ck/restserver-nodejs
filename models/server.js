const express = require('express');
const cors = require('cors');

class Server {
  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  middlewares(){

    //CORS
    this.app.use( cors() );

    //Lectura y parseo del body
    this.app.use( express.json() );

    //directorio público
    this.app.use( express.static('public') );
  }

  routes(){
    this.app.use( this.usuariosPath, require('../routes/usuarios') );
  }

  listen(){
    this.app.listen(this.port);
  }
}


module.exports = Server;