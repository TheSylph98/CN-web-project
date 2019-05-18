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

Route::any('/', function () {
    return view('index');
});

// Route::get('home','HomeController@index');

Route::get('dang-nhap','HomeController@Login');
Route::post('dang-nhap','HomeController@LoginAuth');

Route::get('dang-ki','HomeController@Register');
Route::post('dang-ki','HomeController@DoRegister');

// Route::get('quan-li-thong-tin','HomeController@ThongTinCaNhan');
Route::post('quan-li-thong-tin','HomeController@ChinhSuaThongTin');

//chuyen tien

Route::get("transfer", "TransferController@getViewTransfer");
Route::post("post-transfer", "TransferController@postTransfer")->name("post-transfer");

Route::get('them-tai-khoan','HomeController@gThemTaiKhoan');
Route::post('them-tai-khoan','HomeController@pThemtaikhoan');

//Get bank
Route::get("bank","HomeController@GetBank");
Route::get("bank-user","HomeController@GetBankUser");
//Get Phone Book
Route::get("danh-ba","HomeController@GetPhoneBook");

//Post Notification
Route::post("thong-bao","HomeController@PNotification");
//get TransactionHistory
Route::get("lich-su-giao-dich","HomeController@TransactionHistory");

//Nap Thes
Route::get('nap-the','HomeController@GNapThe');
Route::post('nap-the','HomeController@NapThe');
