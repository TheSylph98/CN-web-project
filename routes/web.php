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

Route::get('dang-nhap','LoginController@Login');
Route::post('dang-nhap','LoginController@LoginAuth');

Route::get('dang-ki','RegisterController@Register');
Route::post('dang-ki','RegisterController@DoRegister');

Route::post('dang-xuat','LoginController@Logout');

Route::post('quan-li-thong-tin','UserController@ChinhSuaThongTin');
Route::post('thong-tin-ca-nhan','UserController@ThongTinCaNhan');

//chuyen tien
Route::get("transfer", "TransferController@getViewTransfer");
Route::post("post-transfer", "TransferController@postTransfer");
//nap tien vao vi
Route::get("addmoney", 'AddMoneyToWallet@getViewAddMoney');
Route::post("post-add-money", 'AddMoneyToWallet@postAddMoney');

//cap nhật lại trường daxem thongbao
Route::post("update-thongbao", "NotificationController@updateNotification");

Route::get('them-tai-khoan','UserController@GetLinkAccount');
Route::post('them-tai-khoan','UserController@PostLinkAccount');

//Get bank
Route::post("bank","BankController@GetBank");
Route::post("bank-user","BankController@GetBankUser");
//Get Phone Book
Route::post("danh-ba","PhoneBookController@GetPhoneBook");

//Post Notification
Route::post("thong-bao","NotificationController@PNotification");
//get TransactionHistory
Route::post("lich-su-giao-dich","TransactionHistoryController@TransactionHistory");

//Nap The
Route::get('nap-the','NapTheController@GNapThe');
Route::post('nap-the','NapTheController@PNapThe');

//Them danh ba
Route::get('them-danh-ba','PhoneBookController@GetAddPhoneBook');
Route::post('them-danh-ba','PhoneBookController@PostAddPhoneBook');
