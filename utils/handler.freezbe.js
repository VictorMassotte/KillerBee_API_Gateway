require('dotenv').config();

const servers = [
    `${process.env.API_URL_FREEZBE_01}`,
    `${process.env.API_URL_FREEZBE_02}`,
  ]
  
  let current = 0, server
  
  function handlerFreezbe(){
    server = servers[current]
          
    current === (servers.length - 1) ? current = 0 : current++
    console.log(server);
    return server;
  }

module.exports = handlerFreezbe;