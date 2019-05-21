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

//    lay thong tin nguoi nhan qua email
    public function getIdNhan($email)
    {
        $user_nhan = DB::table('users')->where('email',$email)->first();

        if (!$user_nhan) {
            return -1;
        }
        return $user_nhan;
    }

    public function postTransfer(Request $request)
    {
        if (!Auth::check()) {
            return response()->json([
                "title" => "error",
                "content" => "Bạn phải đăng nhập trước",

            ]);
        }

        $validator = Validator::make($request->all(),
            [
                'sotien' => 'required',
                'email_nhan' => "required",
                'noidung' => "required"
            ],
            [
                'sotien.required' => 'Bạn chưa nhập số tiền ',
                'noidung.required' => 'Bạn chưa nhập nội dung chuyển tiền',
                'email_nhan.required' => 'Bạn chưa nhập email',

            ]);

        $errs = $validator->errors();
        $err = $errs->all();
        if ($validator->fails()) {
            return response()->json([
                'title' => 'error',
                'content' => $err[0]
            ]);
        }

        $user = Auth::user();

//        check so tien con
        $check = $this->check_sotien($user->id, $request->sotien);
        if ($check == 0) {
            return response()->json(
                ["title" => "error",
                    "content" => "Tài khoản không đủ tiền"]);
        };

        //      check email nguoi nhan , neu ton tai lay id nguoi nhan

        $user_nhan = $this->getIdNhan($request->email_nhan);
        if (!$user_nhan) {
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
        $chuyen_tien->id_nhan = $user_nhan->id;
        $chuyen_tien->sotien = $request->sotien;
        $chuyen_tien->noidung = $request->noidung;
        $chuyen_tien->save();

        $id_chuyentien = $chuyen_tien->id;

//        cập nhật lai số tiên trong wallet

        $user->sotien = $user->sotien - $request->sotien;
        $user->save();

        $user_nhan = User::findOrFail($user_nhan->id);
        $user_nhan->sotien = $user_nhan->sotien + $request->sotien;
        $user_nhan->save();

        // return view("viewtest.ok");

        $thongbao = new thongbao();
        $thongbao->tieude = "Thông báo chuyển tiền thành công";
        $thongbao->noidung = "Bạn vừa chuyển thành công " . $request->sotien . "đ cho chủ tài khoàn có email " . $user_nhan->email;
        $thongbao->users_id = $user->id;
        $thongbao->daxem = 0;
        $thongbao->type = "chuyentien_".$id_chuyentien;

        $thongbao->save();
//        luu vao bang thong bao cho nguoi nhan
        $thongbao_nhan = new thongbao();
        $thongbao_nhan->tieude = "Thông báo nhận tiền thành công";
        $thongbao_nhan->noidung = "Tài khoản của bạn  nhận thành công " . $request->sotien . "đ  từ chủ tài khoàn có email " . $user->email;
        $thongbao_nhan->users_id = $user_nhan->id;
        $thongbao_nhan->daxem = 0;
        $thongbao_nhan->type = "nhantien_".$id_chuyentien;
        $thongbao_nhan->save();


        return response()->json([
            "title" => "success",
            "content" => "Chuyển tiền thành công"
        ]);

    }

}
