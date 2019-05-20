<?php
/**
 * Created by PhpStorm.
 * User: nghiapo
 * Date: 20/05/2019
 * Time: 16:39
 */

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\chuyentien;
use Illuminate\Support\Facades\Auth;
use function PHPSTORM_META\elementType;
use function PHPSTORM_META\type;
use Validator;
use App\naptien;
use App\User;
use App\nganhang;
use App\taikhoan;
use App\danhba;
use App\loaihoadon;
use App\napthe;
use App\nhamang;
use App\ruttien;
use App\thanhtoan;
use App\thongbao;
use DB;
class PayBillController
{
    public function getViewPayBill()
    {
        return view("viewtest.paybill");
    }


    public function postPayBill(Request $request)
    {
//        /        check dang nhap
        if (Auth::check()) {
            return response()->json([
                "title"=>"error",
                "content" => "Bạn phải đăng nhập trước",

            ]);
        }

        $validator = Validator::make($request->all(),
            [
                'mahoadon' => 'required',
            ],
            [
                'mahoadon.required' => 'Bạn chưa nhập mã hóa đơn ',
            ]);

        $errs = $validator->errors();
        $err = $errs->all();
        if ($validator->fails()) {
            return response()->json([
                'title' => 'error',
                'content' => $err[0]
            ]);
        }
//


    }

}