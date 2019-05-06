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
        return redirect('home');
      else
        return redirect('dang-nhap')->with('message','Đăng nhập không thành công!');
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
    	$this->validate($request,
    		[
    			'username' => 'required|min:3|max:50',
    			'email' => 'required|email|unique:users,email',
    			'password' => 'required|min:6|max:32',
    			'password_again' => 'required|same:password'
    		],
    		[
    			'username.required' => 'Bạn chưa nhập Tên tài khoản!',
    			'username.min' => 'Tên tài khoản gồm tối thiểu 3 ký tự!',
    			'username.max' => 'Tên tài khoản không được vượt quá 50 ký tự!',
    			'email.required' => 'Bạn chưa nhập địa chỉ Email!',
    			'email.email' => 'Bạn chưa nhập đúng định dạng Email!',
    			'email.unique' => 'Địa chỉ Email đã tồn tại!',
    			'password.required' => 'Bạn chưa nhập mật khẩu!',
    			'password.min' => 'Mật khẩu gồm tối thiểu 6 ký tự!',
    			'password.max' => 'Mật khẩu không được vượt quá 32 ký tự!',
    			'password_again.required' => 'Bạn chưa xác nhận mật khẩu!',
    			'password_again.same' => 'Mật khẩu xác nhận chưa khớp với mật khẩu đã nhập!'
    		]);

        $user = new User;
      	$user->ten = $request->username;
      	$user->email = $request->email;
      	$user->password = bcrypt($request->password_again);
  			$user->diachi = $request->diachi;
  			$user->sodienthoai = $request->sodt;
      	$user->save();
    	return redirect('dang-ki')->with('message','Đăng ký tài khoản thành công!');
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

}
