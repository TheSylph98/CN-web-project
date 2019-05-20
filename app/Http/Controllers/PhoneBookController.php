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

class PhoneBookController extends Controller
{
    //lay danh ba
    public function GetPhoneBook(){
     $user = Auth::user();
     $user_id = $user->id;
     $friend = array();
     $friend_id = danhba::where('users_id',$user_id)->get('friend_id');
     foreach ($friend_id as $id) {
        $id = $id->friend_id;
        $friend_info = User::where('id',$id)->get();
        //echo $friend_info;
        array_push($friend,$friend_info[0]);
     }
     return response()->json(['danhba'=>$friend]);
    }

    // them ban be vao danh ba
    public function GetAddPhoneBook(){
      if(Auth::check()){
        return view('page.themdanhba',['user'=>Auth::user()]);
      }else
        return response()->json(['message'=>'ban chua dang nhap']);
    }

    public function PostAddPhoneBook(Request $request){
      $validator = Validator::make($request->all(),
      [
        'sodt' =>'required'
      ],
      [
        'sodt.required' => 'Ban chua nhap sodt'
      ]);

      $errs = $validator->errors();
      $err = $errs->all();
      $phonenumber = $request->sodt;

      if($validator->fails()){
          return response()->json([
              'link' => 'error',
              'errors' => $err[0],
          ]);
      }

      if(!Auth::check()){
        return response()->json([
          'message'=>'ban chua dang nhap'
        ]);
        exit();
      }
      $user = Auth::user();
      $phone_friend = User::where('sodienthoai',$phonenumber)->get();

      if($phonenumber == $user->sodienthoai){
        return response()->json(['message'=>'day la so dt cua ban']);
      }
      //kiemtra so do da co trong danh ba
      $danhba_user = danhba::where('users_id',$user->id)->get();
      foreach ($danhba_user as $key ) {
        $friend_id =  $key->friend_id;
        $friend = User::where('id',$friend_id)->get();
        if($phonenumber == $friend[0]->sodienthoai){
          return response()->json(['message'=>'so dien thoai nay da co trong danh ba vui long kiem tra danh ba']);
          exit();
        }
      }
      //kiem tra co tai khoan nao co sdt tren ko
      if(count($phone_friend) == 0){
        return response()->json(['message'=>'ko ton tai user co sdt nay']);
      }else{
        $db = new danhba;
        $db->users_id = $user->id;
        $db->friend_id = $phone_friend[0]->id;
        $db->save();
        return response()->json([
          'link_phone_number' =>'success',
          'user' =>  $user,
          'friend'=> $phonenumber
        ]);
      }
    }
}
