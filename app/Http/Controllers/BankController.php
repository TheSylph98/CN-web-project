<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\naptien;
use App\chuyentien;
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

class BankController extends Controller
{
    //
    public function GetBank(){
     $bank = nganhang::all();
      return response()->json($bank);
    }

    public function GetBankUser(){
        if(Auth::check()){
            $user = Auth::user();
            $id = $user->id;
            $tk = taikhoan::where('users_id',$id)->get();
            $list_bank = array();
            foreach($tk as $t){
                $ng_id = $t->nganhang_id;
                $nganhang = nganhang::where('id',$ng_id)->get();
                array_push($list_bank,$nganhang[0]);
            }

            return response()->json([
              'account'=> $tk,
              'bank'=>$list_bank
            ]);
        }
        else
            return response()->json(['message'=>'ban chua dang nhap']);
    }
}
