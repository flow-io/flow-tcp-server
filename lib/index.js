/**
*
*	FLOW: TCP Server
*
*
*	DESCRIPTION:
*		- Thin wrapper for creating TCP servers.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// MODULES //

	var isObject = require( 'validate.io-object' ),
		isIP = require( 'validate.io-ip-address' ),
		isInteger = require( 'validate.io-integer' ),
		net = require( 'net' );


	// SERVER //

	/**
	* FUNCTION: createServer( [options,] clbk )
	*	Creates a TCP server.
	*
	* @param {Object} [options] - object containing configuration options: `host` and `port`. Default host is `127.0.0.1` and default port is `0` (i.e., assigned by system)
	* @param {Function} clbk - callback invoked after server is ready to receive connections
	* @returns {Server} TCP server
	*/
	function createServer( options, clbk ) {
		var host, port, server;
		if ( arguments.length < 2 ) {
			clbk = options;
			options = {};
		}
		if ( !isObject( options ) ) {
			throw new TypeError( 'createServer()::invalid input argument. Options must be an object.' );
		}
		if ( typeof clbk !== 'function' ) {
			throw new TypeError( 'createServer()::invalid input argument. Callback must be a function.' );
		}
		host = options.host;
		if ( options.hasOwnProperty( 'host' ) ) {
			if ( !isIP( host ) && host !== 'localhost' ) {
				throw new TypeError( 'createServer()::invalid host. Host must be a valid IP address.' );
			}
		}
		port = options.port;
		if ( options.hasOwnProperty( 'port' ) ) {
			if ( !isInteger( port ) || port < 0 ) {
				throw new TypeError( 'createServer()::invalid port. Port must be a integer greater than or equal to 0.' );
			}
		}
		host = host || '127.0.0.1';
		port = port || 0;

		server = net.createServer();
		server.on( 'listening', clbk );
		server.listen( port, host );

		return server;
	} // end FUNCTION createServer()
	

	// EXPORTS //

	module.exports = createServer;

})();