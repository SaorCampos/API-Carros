const vehicle = require('./controllers/vehicle');
const costumer = require('./controllers/costumer');
const server = require('./server');
const host = 'localhost';
const port = '8000';
server.listen(port, host, () =>{
    console.log(`Api rodando no endereço ${host}:${port}`)
})