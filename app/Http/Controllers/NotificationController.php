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
      $validator = Validator::make($request->all(),
      [
        'tieude' => 'required',
        'noidung'=> 'require'
      ],
      [
        'tieude.required' => 'Empty !',
        'noidung.require' => 'Empty !'
      ]);
      $errs = $validator->errors();
      $err = $errs->all();
      if($validator->fails()){
        return response()->json([
          'nofi' => 'error',
          'errors' => $err
        ]); }
      else {
        $notification = new thongbao;
        $notification->tieude = $request->tieude;
        $notification->noidung = $request->noidung;
        $notification->save();
        return response()->json([
          'nofi' => 'success',
          $notification
        ]);
       }

      $notification = thongbao::where('user_id', $user->id)->get();
      return response()->json([
          'noti' => 'success',
          'thongbao' => $notification
      ]);
    }
    //    cap nhat lai daxem trong thongbao
    public function updateNotification(Request $request)
    {

        DB::table('thongbao')
            ->where('id',$request->id )
            ->update(['daxem' => 1]);

    }
}
