<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\User;
use App\nganhang;
use App\taikhoan;
use App\thongbao;

class RegisterController extends Controller
{
    //
    public function Register(){
        return view('page.register');
    }

    public function DoRegister(Request $request){
        $validator = Validator::make($request->all(),
            [
                'username' => 'required|min:3|max:50',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|min:6|max:32',
                'password_again' => 'required|same:password'
            ],
            [
                'username.required' => 'You have not entered username!',
                'username.min' => 'Username must includes at least 3 characters!',
                'username.max' => 'Username\'s length cannot exceed 32 characters!',
                'email.required' => 'You have not entered email address!',
                'email.email' => 'Invalid email format!',
                'email.unique' => 'Email address has already been registered!',
                'password.required' => 'You have not entered password!',
                'password.min' => 'Password must includes at least 6 characters!',
                'password.max' => 'Password\'s length cannot exceed 32 characters!',
                'password_again.required' => 'Password has not been verified!',
                'password_again.same' => 'Password and confirmation password do not match!'
            ]);
        $errs = $validator->errors();
        $err = $errs->all();
        if($validator->fails()){
            return response()->json([
                'register' => 'error',
                'errors' => $err[0]
            ]);
        }
        $user = new User;
        $user->ten = $request->username;
        $user->email = $request->email;
        $user->password = bcrypt($request->password_again);
        $user->diachi = $request->diachi;
        $user->sodienthoai = $request->sodt;
        $user->sotien =0;
        $user->save();
        //return redirect('dang-ki')->with('message','Đăng ký tài khoản thành công!');
        return response()->json([
            'register'=>'success',
            'user' => [
                'username' => $user->ten,
                'email' => $user->email,
                'password' => $user->password,
                'address'=> $user->diachi,
                'phone'=> $user->sodienthoai,
                'sotien'=> $user->sotien
            ]
        ]);
    }
}
