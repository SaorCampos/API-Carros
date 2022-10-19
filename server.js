const http = require('http');
const router = require('./router');

//funcao que é executada a cada request
const eachRequest = (request, response) => {
    //Definindo o tipo de resposta para json
    response.setHeader('Content-Type', 'application/json');

    //pegando a URL e o metodo acessada na request pelo cliente http
    // let url = request.url;
    // let method = request.method;
    let {url, method} = request;

    let content = "";

    //tenta executar esse codigo
    try {
        //definindo conteudo da resposta
        content = JSON.stringify(
            router(url, method)
        );
    } catch (error) { //se der algum erro, executa esse daqui
        response.writeHead(error)
    }

    //respondendo pro httpClient
    response.end(content);
};

//criando o servidor web
module.exports = http.createServer(eachRequest);