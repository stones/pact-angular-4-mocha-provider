<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get( '/', function () use ( $app ) {
	return $app->version();
} );

$app->get( '/content/{id}', function ( $id ) use ( $app ) {
	switch ( $id ) {
		case 'dashboard_greeting':
			return [ "body" => 'Welcome to the dashboard' ];
			break;
		default:
			return [ "body" => 'No content was found' ];
	}
} );


$app->post( '/content/{id}', function ( $id ) use ( $app ) {

	return [ "body" => 'Updated content' ];
} );