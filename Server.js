let http = require('http');
http.createServer(function(req, res) {
	if (req.url==='/Hi') {
	res.writeHead(200, {'Content-Type': 'Text/plain'});
	res.end('Hello World\n');
	}
	else if (req.url === '/YourHobby') {
 		res.writeHead(200, {'Content-Type': 'Text/plain'});
 		res.end('Singing\n');
 	}
 	else if (req.url ==='/YourAge') {
 		res.writeHead(200, {'Content-Type': 'Text/plain'});
 		res.end('18\n');

 	}
 	else if (req.url ==='/University') {
 		res.writeHead(200, {'Content-Type': 'Text/plain'});
 		res.end('AUA\n');
 	}
 	else {
		res.writeHead(404, {'Content-Type': 'Text/plain'});
		res.end('I do not know, ask your teacher');
 	}
}).listen(3001);