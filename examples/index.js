var createServer = require( './../lib' );

var options = {
	'host': '127.0.0.1',
	'port': 0
};

var server = createServer( options, onReady );

function onReady() {
	var addr = server.address();
	console.log( '...server is listening at %s on port %d...', addr.address, addr.port );
	server.close();
}