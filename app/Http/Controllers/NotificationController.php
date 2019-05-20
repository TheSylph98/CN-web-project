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

class NotificationController extends Controller
{
    //
    public function PNotification(Request $request){
      if (Auth::check()) {
        $user = Auth::user();
        $notification = thongbao::where('users_id', $user->id)->get();
        return response()->json([
            'noti' => 'success',
            'thongbao' => $notification
        ]);
      } else {
        return response()->json([
            'noti' => 'error',
            'errors' => "You have not logged in yet",
        ]);
      }
    }
    //    cap nhat lai daxem trong thongbao
    public function updateNotification(Request $request)
    {

        DB::table('thongbao')
            ->where('id',$request->id )
            ->update(['daxem' => 1]);

    }
}
