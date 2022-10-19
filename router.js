const customer = require('./controllers/costumer');
const vehicle = require('./controllers/vehicle');

const routes = {
    '/customer': {
        'GET': customer.list,
        'POST': customer.add,
        'PATCH': customer.update,
        'DELETE': customer.remove, 
    },
    '/vehicle': {
        'GET': vehicle.list,
        'POST': vehicle.add,
        'PATCH': vehicle.update,
        'DELETE': vehicle.remove, 
    },
}
function router(url, method) {
    //a url representa qual controller a gente precisa
    //o method representa qual function do controller vai ser executada
    if (!routes[url]) {
        throw "404"; //gerando um erro customizado
    }
    if (!routes[url][method]) {
        throw "405";
    }
    return routes[url][method]();
}
module.exports = router;