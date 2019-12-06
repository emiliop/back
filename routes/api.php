<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('services','ServiceController@index');
Route::get('services/{id}','ServiceController@show');
Route::post('services','ServiceController@store');
Route::put('services/{id}','ServiceController@update');
Route::delete('services/{id}','ServiceController@delete');

