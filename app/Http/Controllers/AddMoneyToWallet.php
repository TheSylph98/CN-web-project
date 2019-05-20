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
        return $account;



    }

    public function postAddMoney(Request $request)
    {
//        check dang nhap
        if (!Auth::check()) {
            return response()->json([
                "title"=>"error",
                "content" => "Bạn phải đăng nhập trước",

            ]);
        }

        $validator = Validator::make($request->all(),
            [
                'sotien' => 'required',
                'nganhang' => "required"
            ],
            [
                'sotien.required' => 'Bạn chưa nhập số tiền ',
                'nganhang.required' => 'Bạn phải chọn ngân hàng',

            ]);

        $errs = $validator->errors();
        $err = $errs->all();
        if ($validator->fails()) {
            return response()->json([
                'title' => 'error',
                'content' => $err[0]
            ]);
        }


//        check ngan hang
        $account = $this->checkBanksAsociateToUser($request->nganhang);
        if ($account == null) {
            return response()->json([
                "title" => "error",
                "content" => "Ngân hàng chưa liên kết với ví điện tử của bạn",

            ]);
        }



//        check so tien trong tk so với tiên định nạp
        if ($account->sotien <= $request->sotien) {
            return response()->json([
                "title" => "error",
                "content" => "Số dư trong tài khoản ngân hàng của bạn không đủ để thực hiện giao dich",

            ]);
        }



        $user = Auth::user();

//        thuc hiên nap tien
        $naptien = new naptien();
        $naptien->sotien = $request->sotien;
        $naptien->users_id = $user->id;
        $naptien->save();

        //tru tien trong tk ngan hang
        $account->sotien = $account->sotien-$request->sotien;
        DB::table('taikhoan')
            ->where('users_id', $user->id)
            ->where('nganhang_id',$account->nganhang_id)
            ->update(['sotien' =>$account->sotien -$request->sotien ]);



        // get id nap tien
        $id_naptien = naptien::max("id");

        $thongbao = new thongbao();
        $thongbao->tieude = "Thông báo nạp tiền thành công";
        $thongbao->noidung = "Bạn vừa nạp thành công " . $request->sotien . "đ vào tài khoản " ;
        $thongbao->user_id = $user->id;
        $thongbao->daxem = 0;
        $thongbao->type = "naptien_".$id_naptien;
        $thongbao->save();



//      tra ve thong bao
        return response()->json([
            "title" => "success",
            "content" => "Nạp tiền thành công"
        ]);


    }

}