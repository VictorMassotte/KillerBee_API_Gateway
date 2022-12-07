require('dotenv').config();

const servers = [
    `${process.env.API_URL_AUTH_01}`,
    `${process.env.API_URL_AUTH_02}`,
  ]
  
  let current = 0, server
  
  function handlerUser(){
    server = servers[current]
          
    current === (servers.length - 1) ? current = 0 : current++
    console.log(server);
    return server;
  }

module.exports = handlerUser;