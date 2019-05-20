<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\User;
use App\nganhang;
use App\taikhoan;
use App\danhba;
use App\loaihoadon;
use App\nhamang;
use App\thanhtoan;
use App\thongbao;

class UserController extends Controller
{
    //
    public function ThongTinCaNhan(){
        if(Auth::check()){
            $user = Auth::user();
            $tk = taikhoan::where('users_id',$user->id)->get();
            //return view('page.thongtincanhan',['user_info' => Auth::user(), 'tk' => $tk]);
            return response()->json([
                'check'=>'true',
                'user_info'=> $user,
                'account'=> $tk
            ]);
        }
        else
            return response()->json([
                'check'=>'false',
                'message'=>'Bạn chưa Đăng Nhập!'
            ]);
    }

    public function ChinhSuaThongTin(Request $request){
        $validator = Validator::make($request->all(),
            [
                'username' => 'required|min:3|max:50',
            ],
            [
                'username.required' => 'Bạn chưa nhập Tên tài khoản!',
                'username.min' => 'Tên tài khoản gồm tối thiểu 3 ký tự!',
                'username.max' => 'Tên tài khoản không được vượt quá 50 ký tự!'
            ]);
        $errs = $validator->errors();
        $err = $errs->all();
        if($validator->fails()){
            return response()->json([
                'update_info' => 'error',
                'errors' => $err
            ]); }
        else {
            $user = Auth::user();
            $user->ten = $request->username;
            $user->diachi = $request->diachi;
            $user->sodienthoai = $request->sodt;
            $user->save();
            return response()->json([
                'update_info'=> 'true',
                'user_info' => $user,
                'message' =>'Chinh sua thanh cong'
            ]);

        }
    }

    public function GetLinkAccount(){
        if(Auth::check()){
            $user = Auth::user();
            $nganhang = nganhang::all();
            // return view('page.themtaikhoan',['user_info' => Auth::user(),'nganhang'=>$nganhang]);
            return response()->json([
              'check'=>'true',
              'user_info'=> $user,
              'bank'=> $nganhang
            ]);
        }
        else
            //return redirect('dang-nhap')->with('message','Bạn chưa Đăng Nhập!');
            return response()->json([
                'check'=>'false',
                'message'=>'Ban chua dang nhap'
            ]);
       }

    public function PostLinkAccount(Request $request){
        $validator = Validator::make($request->all(),
            [
                'sotaikhoan' => 'required|max:16',
                'nganhang' => 'required',
            ],
            [
                'sotaikhoan.required' => 'Bạn chưa nhập tài khoản!',
                'sotaikhoan.max' => 'So tai khoan ko qua 16 ki tu',
                'nganhang.required' => 'You have not specified a bank',
            ]);
        $user = Auth::user();
        $id =$user->id;
        $errs = $validator->errors();
        $err = $errs->all();
        $sotk = $request->sotaikhoan;
        if($validator->fails()){
            return response()->json([
                'link' => 'error',
                'errors' => $err[0],
            ]);
        }
        $tk = taikhoan::where('sotaikhoan',$sotk)->get();
        // kiem tra tai khoan ton tai khong
        if (count($tk)==0){
            return response()->json([
                'link'=>'error',
                'errors'=> 'Account does not exist!'
            ]);
            exit();
        }
        $id_ngh =  $tk[0]->nganhang_id;
        // kiem tra tai khoan thuoc ngan hang
        if($id_ngh != $request->nganhang){
            return response()->json([
                'link' => 'error',
                'errors' => 'Account does not exist in this bank!'
            ]);
            exit();
        }
        //kiem tra tai khoan da link toi user nao chua
        if(!is_null($tk[0]->users_id)){
            return response()->json([
                'link'=>'error',
                'errors'=>'tai khoan nay da co user sd'
            ]);
            exit();
        }
        //ktra loi nhap dau vao
        if($validator->fails()){
            return response()->json([
                'link' => 'error',
                'errors' => $err[0]
            ]);
        }
        //
        $account = $tk[0];
        $account->users_id = $id;
        $account->save();
        return response()->json([
            'link' => 'success',
            'account' => $tk[0],
            'user' => $user
        ]);
    }
}
