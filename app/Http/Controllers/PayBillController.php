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
use App\hoadon;
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

    public function getBillById(Request $request) {
        if (Auth::check()) {
            $validator = Validator::make($request->all(),
                [
                    'id' => 'required',
                ],
                [
                    'id.required' => 'You have not entered bill\'s id',
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
                "content" => "You have to login first",
            ]);
        }

        $bill = hoadon::where('id', $request->id)->first();
        if ($bill == null) {
            return response()->json([
                "title"=>"error",
                "content" => "Invalid bill id",
            ]);
        }

        $loaihoadon = loaihoadon::where('id', $bill->loaihoadon_id)->first();

        return response()->json([
            "title" => "success",
            "content" => $bill,
            "type" => $loaihoadon->tenloai,
        ]);
    }

    public function getBillType(Request $request) {
        $billtype = loaihoadon::all();
        return response()->json($billtype);
    }

    public function getBillByCodeType(Request $request) {
        if (Auth::check()) {
            $validator = Validator::make($request->all(),
                [
                    'mahoadon' => 'required',
                    'id_loaihoadon' => 'required',
                ],
                [
                    'mahoadon.required' => 'You have not entered bill\'s code',
                    'id_loaihoadon.required' => 'You have not specified type of bill'
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
                "content" => "You have to login first",
            ]);
        }


        $bill = $this->getInforBill($request->mahoadon,$request->id_loaihoadon);
        if ($bill == null) {
            return response()->json([
                "title" => "error",
                "content" => "Invalid bill's code!",
            ]);
        }

        return response()->json([
            "title" => "success",
            "content" => $bill,
        ]);

    }


    public function postPayBill(Request $request)
    {
        //        check dang nhap

        if (Auth::check()) {
            $validator = Validator::make($request->all(),
                [
                    'mahoadon' => 'required',
                    'id_loaihoadon' => 'required',
                ],
                [
                    'mahoadon.required' => 'You have not entered bill\'s code',
                    'id_loaihoadon.required' => 'You have not specified type of bill'
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
        $bill = $this->getInforBill($request->mahoadon,$request->id_loaihoadon);
//        echo dd($bill);
//        check bill null
        if ($bill == null) {
            return response()->json([
                "title" => "error",
                "content" => "Vui lòng kiểm tra lại mã hóa đơn",

            ]);
        } else {
//            check xem hoá đơn đã thanh toán hay chưa
            if ($bill->datra ==1) {
                return response()->json([
                    "title" => "Đã thanh toán",
                    "content" => "This bill had been paid before!",

                ]);
            }
            //            check so tiền bill so với số tiền trong ví

            $user = Auth::user();
            if ($user->sotien < $bill->sotien) {
                return response()->json([
                    "title" => "error",
                    "content" => "Tài khoản của bạn không đủ tiền để thanh toán hóa đơn",
                ]);
            }

//            update số tiền trong tài khoản
            DB::table('users')
                ->where('id', $user->id)
                ->update(['sotien' => $user->sotien-$request->sotien]);

            //            thanh toán

            $thanhtoan = new thanhtoan();
            $thanhtoan->users_id = $user->id;
            $thanhtoan->hoadon_id = $bill->id;
            $thanhtoan->save();
//
//            update hóa đơn datra
            DB::table('hoadon')
                ->where('id', $bill->id)
                ->update(['datra' =>1]);
//          thong bao
            $id_thanhtoan= thanhtoan::max("id");

            $thongbao = new thongbao();
            $thongbao->tieude = "Pay bill successfully";
            $thongbao->noidung = "Bạn vừa thanh toán  thành công  " ;
            $thongbao->users_id = $user->id;
            $thongbao->daxem = 0;
            $thongbao->type = "thanhtoan_".$id_thanhtoan;
            $thongbao->save();


//            thông báo thành công
            return response()->json([
                "title" => "success",
                "content" => "thanh toán hóa đơn  thành công"
            ]);
        }
    }

}