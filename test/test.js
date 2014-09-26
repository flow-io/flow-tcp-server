
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// TCP servers:
	net = require( 'net' ),

	// Module to be tested:
	createServer = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'flow-tcp-server', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( createServer ).to.be.a( 'function' );
	});

	it( 'should throw an error if options is not an object', function test() {
		var values = [
				5,
				[],
				'5',
				true,
				null,
				undefined,
				NaN,
				function(){}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				createServer( value, function(){} );
			};
		}
	});

	it( 'should throw an error if the second argument is not a function', function test() {
		var values = [
				5,
				[],
				'5',
				true,
				null,
				undefined,
				NaN,
				{}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				createServer( {}, value );
			};
		}
	});

	it( 'should throw an error if provided only one argument and the argument is not a function', function test() {
		var values = [
				5,
				[],
				'5',
				true,
				null,
				undefined,
				NaN,
				{}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				createServer( value );
			};
		}
	});

	it( 'should return a server instance', function test() {
		var server = createServer(function(){} );
		assert.instanceOf( server, net.Server );
	});

	it( 'should invoke a callback when listening', function test( done ) {
		function foo() {
			assert.ok( true );
			done();
		}
		createServer( foo );
	});

});