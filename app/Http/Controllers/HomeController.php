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

class HomeController extends Controller
{
    //
    public function index(){
      return view('index');
    }

    public function Login(){
      return view('page.login');
    }

    public function LoginAuth(Request $request){
    // Cách sử dụng validator nếu muốn dùng if để kiểm tra lỗi dữ liệu đầu vào trước khi kiểm tra đăng nhập (Tham khảo mục #Manually Creating Validators tại trang chủ Laravel)
    $validator = Validator::make($request->all(),
      [
        'email' => 'required',
        'password' => 'required|min:6',
      ],
      [
        'email.required' => 'Bạn chưa nhập địa chỉ Email!',
        'password.required' => 'Bạn chưa nhập mật khẩu!',
        'password.min' => 'Mật khẩu gồm tối thiểu 6 ký tự!',
      ]);

    if($validator->fails())
      return redirect('dang-nhap')->withErrors($validator)->withInput();
    else
    {
      if(Auth::attempt(['email' => $request->email, 'password' => $request->password]))
        return redirect('/');
      else
        return redirect('dang-nhap')->with('message','Đăng nhập không thành công!');
    }
  }

  public function Logout(){
    	Auth::logout();
    	return redirect('/home');
    }

  public function Register(){
    return view('page.register');
  }
}
