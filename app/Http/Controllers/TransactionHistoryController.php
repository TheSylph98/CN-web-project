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

class TransactionHistoryController extends Controller
{
    //
    public function TransactionHistory(){
        if(Auth::check()){
            $user = Auth::user();
            $id = $user->id;
            $user_account = taikhoan::where('users_id',$id)->get();
            //ls nap tien
            $naptien = naptien::where('users_id',$id)->get();
            //ls chuyentien
            $chuyentien = chuyentien::where('id_chuyen',$id)->get();
            //ls  napthe
            $napthe = napthe::where('Users_id',$id)->get();
            //ls ruttien
            $ruttien = ruttien::where('users_id',$id)->get();
            //ls thanhtoan
            $thanhtoan = thanhtoan::where('users_id',$id)->get();
            //ls nhantien
            $nhantien = chuyentien::where('id_nhan',$id)->get();

            return response()->json([
                'trans' => 'success',
                'naptien' => $naptien,
                'chuyentien' => $chuyentien,
                'napthe' => $napthe,
                'ruttien' => $ruttien,
                'thanhtoan' => $thanhtoan,
                'nhantien' => $nhantien,
            ]);
        } else {
            return response()->json([
                'trans'=>'error',
                'message'=>'Please login first!'
            ]);
        }
    }
}
