TCP Server
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Thin wrapper for creating TCP servers.


## Installation

``` bash
$ npm install flow-tcp-server
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var createServer = require( 'flow-tcp-server' );
```

The module exports a single method for creating [TCP servers](http://nodejs.org/api/net.html#net_class_net_server).


#### createServer( [options,] clbk )

To create a server,

``` javascript
var options = {
	'host': '127.0.0.1',
	'port': 1337	
};

var server = createServer( options, onReady );

function onReady() {
	var addr = server.address();
	console.log( '...server is listening at %s on port %d...', addr.address, addr.port );
}
```

The `options` argument is not required. The default `host` is `127.0.0.1`, and the default `port` is `0`, i.e., assigned by the system.

The callback is invoked once the server is ready to accept TCP socket connections.


## Examples

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/flow-tcp-server.svg
[npm-url]: https://npmjs.org/package/flow-tcp-server

[travis-image]: http://img.shields.io/travis/flow-io/flow-tcp-server/master.svg
[travis-url]: https://travis-ci.org/flow-io/flow-tcp-server

[coveralls-image]: https://img.shields.io/coveralls/flow-io/flow-tcp-server/master.svg
[coveralls-url]: https://coveralls.io/r/flow-io/flow-tcp-server?branch=master

[dependencies-image]: http://img.shields.io/david/flow-io/flow-tcp-server.svg
[dependencies-url]: https://david-dm.org/flow-io/flow-tcp-server

[dev-dependencies-image]: http://img.shields.io/david/dev/flow-io/flow-tcp-server.svg
[dev-dependencies-url]: https://david-dm.org/dev/flow-io/flow-tcp-server

[github-issues-image]: http://img.shields.io/github/issues/flow-io/flow-tcp-server.svg
[github-issues-url]: https://github.com/flow-io/flow-tcp-server/issues