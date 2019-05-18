<?php
/**
 * Created by PhpStorm.
 * User: nghiapo
 * Date: 06/05/2019
 * Time: 16:09
 */

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\chuyentien;
use Illuminate\Support\Facades\Auth;
use function PHPSTORM_META\elementType;
use function PHPSTORM_META\type;
use Validator;
use App\naptien;
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




class TransferController
{
    public function getViewTransfer()
    {
        return view("viewtest.transferview");
    }


    public function check_sotien($id,$sotien)
    {
        try {
            $user = User::findOrFail($id);

        } catch (Exception $exception) {
            return 0;
        }

        if ($user->sotien < $sotien) {
            return 0;
        }
        return 1;

    }

//    lay email nguoi
    public function getIdNhan($email)
    {
        $user = DB::table('users')->where('email',$email)->first();

        if (!$user) {
            return -1;
        }
        $id = $user->id;
        return $id;
    }

    public function postTransfer(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'sotien' => 'required',
//                'id_chuyen' => 'required',
                'email_nhan' => "required",
                'noidung'=>"required"
            ],
            [
                'sotien.required' => 'Bạn chưa nhập số tiền ',
                'noidung.required' => 'Bạn chưa nhập nội dung chuyển tiền',
//                'id_chuyen.required' => 'Empty !',
                'email_nhan.required' => 'Bạn chưa nhập email',

            ]);

        $user = Auth::user();
        $errs = $validator->errors();
        $err = $errs->all();
        if($validator->fails()){
            return response()->json([
                'title' => 'error',
                'content' => $err[0]
            ]);
        }


//        check so tien con
//        var_dump($user);
        $check = $this->check_sotien($user->id, $request->sotien);
        if ($check == 0) {
            return response()->json(
                ["title" => "error",
                    "content" => "Tài khoản không đủ tiền"]);
        };

        //      check email nguoi nhan , neu ton tai lay id nguoi nhan

        $id_nhan = $this->getIdNhan($request->email_nhan);
        if ($id_nhan < 0) {
                return response()->json(
                    [
                        "title" => "error",
                        "content" => "Tài khoản bạn nhập không tồn tại"
                    ]
                );
            }
//        tao doi tuong chuyen tien
        $chuyen_tien = new chuyentien();
        $chuyen_tien->id_chuyen = $user->id;
        $chuyen_tien->id_nhan = $id_nhan;
        $chuyen_tien->sotien = $request->sotien;
        $chuyen_tien->noidung = $request->noidung;

        $chuyen_tien->save();




        }


}



