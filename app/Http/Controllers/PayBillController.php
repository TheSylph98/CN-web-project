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

//    lay thong tin hoa don
    public function getInforBill($mahoadon,$id_loaihoadon)
    {
        $bill = DB::table("hoadon")->where("mahoadon", $mahoadon)->where('loaihoadon_id',$id_loaihoadon)->first();
        return $bill;
    }


    public function postPayBill(Request $request)
    {
        //        check dang nhap

        if (Auth::check()) {
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
        } else {
            return response()->json([
                "title"=>"error",
                "content" => "Bạn phải đăng nhập trước",

            ]);
        }


//        get thong tin hoa don
        $bill = $this->getInforBill($request->mahoadon);
//        check bill null
        if ($bill == null) {
            return reponse()->json([
                "title" => "error",
                "content" => "Vui lòng kiểm tra lại mã hóa đơn",

            ]);
        } else {
//            check so tiền bill so với số tiền trong ví
            $user = Auth::user();
            if ($user->sotien < $bill->sotien) {
                return reponse()->json([
                    "title" => "error",
                    "content" => "Tài khoản của bạn khong đủ tiền để thanh toán hóa đơn",
                ]);
            }

//            thanh toán
            DB::table('users')
                ->where('id', $user->id)
                ->update(['sotien' => $user->sotien-$request->sotien]);
//            thong bao
        }






    }

}