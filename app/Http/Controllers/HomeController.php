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
      return response()->json([
        'logout'=>'success',
        'message'=>'!'
      ]);
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
          'address'=> $user->diachi,
          'phone'=> $user->sodienthoai,
          'sotien'=> $user->sotien
        ]
      ]);
    }


    public function ThongTinCaNhan(){
      if(Auth::check()){
        $user = Auth::user();
        $tk = taikhoan::where('id_user',$user->id)->get();
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
        //'password' => 'required|min:6|max:32',
        //'password_again' => 'required|same:password'
      ],
      [
        'username.required' => 'Bạn chưa nhập Tên tài khoản!',
        'username.min' => 'Tên tài khoản gồm tối thiểu 3 ký tự!',
        'username.max' => 'Tên tài khoản không được vượt quá 50 ký tự!',
        //password.required' => 'Bạn chưa nhập mật khẩu!',
        //'password.min' => 'Mật khẩu gồm tối thiểu 6 ký tự!',
        //'password.max' => 'Mật khẩu không được vượt quá 32 ký tự!',
        //'password_again.required' => 'Bạn chưa xác nhận mật khẩu!',
        //'password_again.same' => 'Mật khẩu xác nhận chưa khớp với mật khẩu đã nhập!'
      ]);
      $errs = $validator->errors();
      $err = $errs->all();
      if($validator->fails()){
        return response()->json([
          'update_info' => 'error',
          'errors' => $err[0]
        ]); }
      else {
        $user = Auth::user();
        $user->ten = $request->username;
        $user->diachi = $request->diachi;
        $user->sodienthoai = $request->sodt;
        $user->save();
        return response()->json([
          'update_info'=> 'true',
          'user_info' => [
            'username' => $user->ten,
            'email' => $user->email,
            'address'=> $user->diachi,
            'phone'=> $user->sodienthoai,
            'sotien'=> $user->sotien
          ],
          'message' =>'Chinh sua thanh cong'
        ]);
    //return redirect('quan-ly-thong-tin')->with('message','Thay Đổi thông tin Người Dùng thành công!');
  }
}
  public function gThemTaiKhoan(){
    if(Auth::check()){
      $user = Auth::user();
      $nganhang = nganhang::all();
      //return view('page.themtaikhoan',['user_info' => Auth::user(),'nganhang'=>$nganhang]);
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

   public function pThemtaikhoan(Request $request){
     $validator = Validator::make($request->all(),
     [
       'sotaikhoan' => 'required',
       'nganhang' => 'required',
     ],
     [
       'sotaikhoan.required' => 'You have not entered account number yet!',
       'nganhang.required' => 'You have not specified bank!',
     ]);
     $user = Auth::user();
     $errs = $validator->errors();
     $err = $errs->all();
     if($validator->fails()){
       return response()->json([
         'add_account' => 'error',
         'errors' => $err[0]
       ]); }
     else {
       $tk = new taikhoan;
       $tk->users_id = $user->id;
       $tk->sotaikhoan = $request->sotaikhoan;
       $tk->nganhang_id = $request->nganhang;
       $tk->sotien = 5000000;
       $tk->save();
       return response()->json([
         'add_account'=>'true',
         'account' => $tk,
         'message'=>'Ban da them thanh cong'
       ]);
   }
 }
 public function GetBank(){
   $bank = nganhang::all();
    return response()->json($bank);
 }

 public function GetPhoneBook(){
   $user = Auth::user();
   $user_id = $user->id;
   $friend = array();
   $friend_id = danhba::where('users_id',$user_id)->get('friend_id');
  // $friends = json_decode($friend_id)
   foreach ($friend_id as $id) {
      $id = $id->friend_id;
      $friend_info = User::where('id',$id)->get();
      echo $friend_info;
      array_push($friend,$friend_info);
   }
   $fr = json_encode($friend);
   
   return response()->json($fr);
 }

}
