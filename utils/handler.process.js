const servers = [
    `${process.env.API_URL_PROCESS_01}`,
    `${process.env.API_URL_PROCESS_02}`,
  ]
  
  let current = 0, server
  
  function handlerProcess(){
    server = servers[current]
          
    current === (servers.length - 1) ? current = 0 : current++
    console.log(server);
    return server;
  }

module.exports = handlerProcess;