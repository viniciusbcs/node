const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<h1>Pagina principal</h1>');
    }else if(request.url === '/artigos'){
        fs.readFile(`${__dirname}/artigos.html`, (erro, html) => {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(html);
        });
    }else if(request.url === '/contato'){   
        fs.readFile(`${__dirname}/contato.html`, (erro, html) => {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(html);
        });
    }else if(request.url === '/erro'){
        fs.readFile(`${__dirname}/erro.html`, (erro, html) => {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(html);
        });      
    }
    response.end();

}); 

server.listen(3000, () => {
    console.log('Servidor rodando!');
});