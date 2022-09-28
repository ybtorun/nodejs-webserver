const http =require('http');

const server =http.createServer((req,res) => {
    
    const url = req.url;
    
    if (url === '/'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.write('<h2>ANASAYFAYA HOSGELDINIZ<h2>');
    }
    else if (url === '/index'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.write('<h2>INDEX SAYFASINA HOSGELDINIZ<h2>');        
    }
    else if (url === '/hakkimda'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.write('<h2>HAKKIMDA SAYFASINA HOSGELDINIZ<h2>');
    }
    else if (url === '/iletisim'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.write('<h2>ILETISIM SAFYASINA HOSGELDINIZ<h2>');
    }
    else {
        res.writeHead(404, {'Content-type':'text/html'});
        res.write('<h2>404 SAYFA BULUNAMADI<h2>');
    }

    res.end();
});

const port = 5000;
server.listen(5000,() => {
    console.log(`Sunucu port ${port} de baslatildi`)
})