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
use App\lienhe;

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
    // Cách sử dụng validator nếu muốn dùng if để kiểm tra lỗi dữ liệu đầu vào trước khi kiểm tra đăng nhập
    //(Tham khảo mục #Manually Creating Validators tại trang chủ Laravel)
    $validator = Validator::make($request->all(),
      [
        'email' => 'required',
        'password' => 'required|min:6',
      ],
      [
        'email.required' => 'You have not entered e-mail address!',
        'password.required' => 'You have not entered a password!',
        'password.min' => 'Password includes at least 6 characters!',
      ]);
    $errs = $validator->errors();
    $err = $errs->all();
    //echo $err;
    if($validator->fails()){
      return response()->json([
        'login' => 'failed',
        'errors' => $err[0]
      ]);
    }
    else
    {
      if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
          $user = Auth::user();
          return response()->json([
            'login' => 'success',
            'user' => [
              'username' => $user->ten,
              'email' => $user->email,
              'password' => $user->password,
              'address'=> $user->diachi,
              'phone'=> $user->sodienthoai
            ]
          ]);
        } else {
            return response()->json([
              'login' => 'failed',
              'errors' => 'Incorrect password or email does not exist'
            ]);
    }
  }
}

  public function Logout(){
    	Auth::logout();
    	return redirect('home');
    }

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
    			'password.min' => 'Password must includes at least 3 characters!',
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
      	$user->save();
    	//return redirect('dang-ki')->with('message','Đăng ký tài khoản thành công!');
      
      return response()->json([
        'register'=>'success',
        'user' => [
          'username' => $user->ten,
          'email' => $user->email,
          'password' => $user->password,
          'address'=> $user->diachi,
          'phone'=> $user->sodienthoai
        ]
      ]);
    }

    public function LienHe(){
      return view('page.lienhe');
    }
    public function GuiLienHe(Request $request){
      $this->validate($request,
      [
        'email' => 'required|email|unique:users,email'
      ],
      [
        'email.required' => 'Bạn chưa nhập địa chỉ Email!',
        'email.email' => 'Bạn chưa nhập đúng định dạng Email!',
        'email.unique' => 'Địa chỉ Email đã tồn tại!'
      ]);

      $lienhe = new lienhe;
      $lienhe->email = $request->email;
      $lienhe->noidung = $request->noidung;
      $lienhe->save();
      return redirect('lien-he')->with('message','Đăng ký tài khoản thành công!');
    }

    public function ThongTinCaNhan(){
      if(Auth::check()){
        $user = Auth::user();
        $tk = taikhoan::where('id_user',$user->id)->get();
    		return view('page.thongtincanhan',['user_info' => Auth::user(), 'tk' => $tk]);
      }
    	else
    		return redirect('dang-nhap')->with('message','Bạn chưa Đăng Nhập!');
    }

    public function ChinhSuaThongTin(Request $request){
    $this->validate($request,
      [
        'username' => 'required|min:3|max:50',
      ],
      [
        'username.required' => 'Bạn chưa nhập Tên tài khoản!',
        'username.min' => 'Tên tài khoản gồm tối thiểu 3 ký tự!',
        'username.max' => 'Tên tài khoản không được vượt quá 50 ký tự!',
      ]);

    $user = Auth::user();
    $user->ten = $request->username;
    $user->email = $request->email;
    $user->diachi = $request->diachi;
    $user->sodienthoai = $request->sodt;

    if($request->has('password'))
    {
      $this->validate($request,
      [
        'password' => 'required|min:6|max:32',
        'password_again' => 'required|same:password'
      ],
      [
        'password.required' => 'Bạn chưa nhập mật khẩu!',
        'password.min' => 'Mật khẩu gồm tối thiểu 6 ký tự!',
        'password.max' => 'Mật khẩu không được vượt quá 32 ký tự!',
        'password_again.required' => 'Bạn chưa xác nhận mật khẩu!',
        'password_again.same' => 'Mật khẩu xác nhận chưa khớp với mật khẩu đã nhập!'
      ]);
      $user->password = bcrypt($request->password_again);
    }

    $user->save();
    return redirect('quan-ly-thong-tin')->with('message','Thay Đổi thông tin Người Dùng thành công!');
  }

  public function gThemTaiKhoan(){
    if(Auth::check()){
      $user = Auth::user();
      $nganhang = nganhang::all();
      return view('page.themtaikhoan',['user_info' => Auth::user(),'nganhang'=>$nganhang]);
    }
    else
      return redirect('dang-nhap')->with('message','Bạn chưa Đăng Nhập!');
  }

   public function pThemtaikhoan($request){
     $this->validate($request,
     [
       'taikhoan' => 'required',
     ],
     [
       'taikhoan.required' => 'Bạn chưa nhập Tên tài khoản!',
     ]);
     $user = Auth::user();
     //$taikhoan = taikhoan::where('id_user',$user->id)->get();
     $tk = new taikhoan;
     $tk->id_user = $user->id;
     $tk->sotaikhoan = $request->sotaikhoan;
     $tk->nganhang_id = $request->nganhang;
     $tk->tongsotien = 0;
     $tk->save();
    return  redirect('them-tai-khoan')->with('message','Thay Đổi thông tin Người Dùng thành công!');
   }
}
