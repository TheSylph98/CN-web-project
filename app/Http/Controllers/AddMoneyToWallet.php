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

    public function postAddMoney(Request $request)
    {
//        check dang nhap
        if (!Auth::check()) {
            return response()->json([
                "title"=>"error",
                "content" => "Please login first",

            ]);
        }

        $validator = Validator::make($request->all(),
            [
                'sotien' => 'required',
                'sotk' => "required"
            ],
            [
                'sotien.required' => 'You have not entered amount of money',
                'sotk.required' => 'You have not specified bank account',

            ]);

        $errs = $validator->errors();
        $err = $errs->all();
        if ($validator->fails()) {
            return response()->json([
                'title' => 'error',
                'content' => $err[0]
            ]);
        }

        $sotk = $request->sotk;
        $user = Auth::user();
        $account =DB::table('taikhoan')->where('sotaikhoan',$sotk)->first();
        if ($account == null) {
            return response()->json([
                "title" => "error",
                "content" => "Account does not exist!",

            ]);
        }

        if ($account->users_id != $user->id) {
            return response()->json([
                "title" => "error",
                "content" => "Account has not been connected to your wallet!",
            ]);   
        }

//        check so tien trong tk so với tiên định nạp
        if ($account->sotien <= $request->sotien) {
            return response()->json([
                "title" => "error",
                "content" => "Your account balance is not enough to make transaction",

            ]);
        }


//        thuc hiên nap tien
        $user->sotien = $user->sotien + $request->sotien;
        $user->save();
        $naptien = new naptien();
        $naptien->sotien = $request->sotien;
        $naptien->users_id = $user->id;
        $naptien->id_taikhoan = $account->id;
        $naptien->save();

        //tru tien trong tk ngan hang
        // $account->sotien = $account->sotien - $request->sotien;
        DB::table('taikhoan')
            ->where('users_id', $user->id)
            ->where('nganhang_id',$account->nganhang_id)
            ->update(['sotien' =>$account->sotien -$request->sotien ]);



        // get id nap tien
        $id_naptien = naptien::max("id");

        $thongbao = new thongbao();
        $thongbao->tieude = "Deposit successfully";
        $thongbao->noidung = "You deposited successfully " . $request->sotien . "đ from your bank account to your wallet";
        $thongbao->users_id = $user->id;
        $thongbao->daxem = 0;
        $thongbao->type = "naptien_".$id_naptien;
        $thongbao->save();

//      tra ve thong bao
        return response()->json([
            "title" => "success",
            "content" => "Deposit successfully"
        ]);


    }

}