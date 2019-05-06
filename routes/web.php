<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('home','HomeController@index');

Route::get('dang-nhap','HomeController@Login');
Route::post('dang-nhap','HomeController@LoginAuth');

Route::get('dang-ki','HomeController@Register');
Route::post('dang-ki','HomeController@DoRegister');

Route::get('lien-he','HomeController@LienHe');
Route::post('lien-he','HomeController@GuiLienHe');

Route::get('quan-li-thong-tin','HomeController@ThongTinCaNhan');
Route::post('quan-li-thong-tin','HomeController@ChinhSuaThongTin');
