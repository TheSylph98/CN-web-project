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
                        'phone'=> $user->sodienthoai,
                        'amount' => $user->sotien,
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
                'password' => $user->password,
                'address'=> $user->diachi,
                'phone'=> $user->sodienthoai,
                'sotien'=> $user->sotien
            ]
        ]);
    }

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
            //return redirect('quan-ly-thong-tin')->with('message','Thay Đổi thông tin Người Dùng thành công!');
        }
    }

    public function gThemTaiKhoan(){
        if(Auth::check()){
            $user = Auth::user();
            $nganhang = nganhang::all();
            return view('page.themtaikhoan',['user_info' => Auth::user(),'nganhang'=>$nganhang]);
            // return response()->json([
            //   'check'=>'true',
            //   'user_info'=> $user,
            //   'bank'=> $nganhang
            // ]);
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
        // echo $sotk;
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
        // echo $account;
        $account->users_id = $id;
        $account->save();
        return response()->json([
            'link' => 'success',
            'account' => $tk[0],
            'user' => $user
        ]);
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
     foreach ($friend_id as $id) {
        $id = $id->friend_id;
        $friend_info = User::where('id',$id)->get();
        //echo $friend_info;
        array_push($friend,$friend_info[0]);
     }
     return response()->json(['danhba'=>$friend]);
    }

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
            return response()->json([
                'trans' => 'success',
                'naptien' => $naptien,
                'chuyentien' => $chuyentien,
                'napthe' => $napthe,
                'ruttien' => $ruttien,
                'thanhtoan' => $thanhtoan
            ]);
        } else {
            return response()->json([
                'trans'=>'error',
                'message'=>'ban chua dang nhap'
            ]);
        }
    }

    public function GetBankUser(){
        if(Auth::check()){
            $user = Auth::user();
            $id = $user->id;
            $tk = taikhoan::where('users_id',$id)->get();
            $list_bank = array();
            foreach($tk as $t){
                $ng_id = $t->nganhang_id;
                $nganhang = nganhang::where('id',$ng_id)->get();
                array_push($list_bank,$nganhang[0]);
            }

            return response()->json([
              'account'=> $tk,
              'bank'=>$list_bank
            ]);
        }
        else
            return response()->json(['message'=>'ban chua dang nhap']);
    }

    public function NapThe(Request $request){
        if(Auth::check()){
            $validator = Validator::make($request->all(),
                [
                    'sotien' => 'required'
                ],
                [
                    'sotien.required' => 'You have not sotien!'
                ]);
            $user = Auth::user();
            $id = Auth::user()->id;
            $tien_user = $user->sotien;
            $tiennapthe = $request->sotien;
            if ($tiennapthe > $tien_user){
                return response()->json([
                    'napthe'=>'error',
                    'message'=>'khong du tien nap the'
                ]);
            }else {
                $napthe = new napthe;
                $napthe->sotien = $tiennapthe;
                $napthe->users_id = $id;
                $napthe->nhamang_id = $request->nhamang;
                $napthe->save();
                $user->sotien = $tien_user - $tiennapthe;
                $user->save();
                return response()->json([
                    'napthe'=> $napthe,
                    'user' => $user
                ]);
            }
        }else
            return response()->json([
                'bank'=>'error',
                'message'=> 'ban chua dang nhap '
            ]);
    }

    public function GNapThe(){
        $user = Auth::user();
        $nhamang = nhamang::all();
        return view('page.napthe',['nhamang' => $nhamang,'user'=>$user]);
    }

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

    //    cap nhat lai daxem trong thongbao
    public function updateNotification(Request $request)
    {

        DB::table('thongbao')
            ->where('id',$request->id )
            ->update(['daxem' => 1]);

    }
}
