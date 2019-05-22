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

    public function GetBankById(Request $request) {
        $validator = Validator::make($request->all(),
            [
                'id' => 'required',
            ],
            [
                'id.required' => 'You have not entered bank\'s id',
            ]);
        $errs = $validator->errors();
        $err = $errs->all();
        if($validator->fails()){
            return response()->json([
                'get' => 'error',
                'message' => $err[0]
            ]);
        }
        $nganhang = nganhang::where('id', $request->id)->get();
        return response()->json([
            'get' => 'success',
            'nganhang'=> $nganhang[0],
        ]);
    }

    public function GetAccountById(Request $request) {
        $validator = Validator::make($request->all(),
            [
                'id' => 'required',
            ],
            [
                'id.required' => 'You have not entered account\'s id',
            ]);
        $errs = $validator->errors();
        $err = $errs->all();
        if($validator->fails()){
            return response()->json([
                'get' => 'error',
                'message' => $err[0]
            ]);
        }
        $taikhoan = taikhoan::where('id', $request->id)->first();
        if ($taikhoan == null) {
            return response()->json([
                'get' => 'error',
                'message' => 'Invalid account id',
            ]);
        }
        $nganhang = nganhang::where('id', $taikhoan->nganhang_id)->first();
        return response()->json([
            'get' => 'success',
            'taikhoan'=> [
                'sotaikhoan' => $taikhoan->sotaikhoan,
                'id' => $taikhoan->id,
                'ten_nganhang' => $nganhang->ten_nganhang,
            ],
        ]);
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
            return response()->json(['message'=>'Please login first']);
    }
}
