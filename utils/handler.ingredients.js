const servers = [
    `${process.env.API_URL_INGREDIENTS_01}`,
    `${process.env.API_URL_INGREDIENTS_02}`,
  ]
  
  let current = 0, server
  
  function handlerIngredients(){
    server = servers[current]
          
    current === (servers.length - 1) ? current = 0 : current++
    console.log(server);
    return server;
  }

module.exports = handlerIngredients;