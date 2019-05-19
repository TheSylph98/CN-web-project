<?php
/**
 * Created by PhpStorm.
 * User: nghiapo
 * Date: 18/05/2019
 * Time: 23:00
 */

namespace App\Http\Controllers;

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

class AddMoneyToWallet
{
    public function getViewAddMoney()
    {
        return view("viewtest.addMoney");
    }

// public check ngan hang
    public function checkBanksAsociateToUser($bank_name)
    {
        $user = Auth::user();
        $bank =DB::table('nganhang')->where('ten_nganhang',$bank_name)->first();
        if ($bank == null) {
            return response()->json([
                "title" => "error",
                "content" => "Tên ngân hàng không có trong cơ sở dữ liêu",

            ]);
        }


        $account = DB::table("taikhoan")->where("nganhang_id", $bank->id)->where("users_id", $user->id)->first();;
//        print_r($account);
        if ($account== null) {
            return response()->json([
                "title" => "error",
                "content" => "Ngân hàng chưa liên kết với tài khoản của ban",


            ]);
        }



    }

    public function postAddMoney(Request $request)
    {
//        check dang nhap
        $user = Auth::user();
        if ($user == null) {
            return response()->json([
                "title"=>"error",
                "content" => "Bạn phải đăng nhập trước",

            ]);
        }
//        check ngan hang
        $this->checkBanksAsociateToUser($request->nganhang);

    }


}