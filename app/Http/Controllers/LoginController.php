<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\User;

class LoginController extends Controller
{
    //
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

}
