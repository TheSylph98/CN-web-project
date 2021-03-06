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

class NapTheController extends Controller
{
    //
    public function PNapThe(Request $request){
        if(Auth::check()){
            $validator = Validator::make($request->all(),
                [
                    'sotien' => 'required',
                    'nhamang' => 'required',
                ],
                [
                    'sotien.required' => 'You have not entered denomination!',
                    'nhamang.required' => 'You have not specified telecom company',
                ]);
            $user = Auth::user();
            $id = Auth::user()->id;
            $tien_user = $user->sotien;
            $tiennapthe = $request->sotien;
            $errs = $validator->errors();
            $err = $errs->all();
            if($validator->fails()){
                return response()->json([
                    'napthe' => 'error',
                    'message' => $err[0]
                ]);
            }
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

                $id_napthe = $napthe->id;
                $nhamang = nhamang::where('id', $request->nhamang)->get();
                $thongbao = new thongbao();
                $thongbao->tieude = "Buy Mobile card successfully";
                $thongbao->noidung = "You bought a mobile card of " . $nhamang[0]->tennhamang . " with denomination of " .  $request->sotien . "đ";
                $thongbao->users_id = $user->id;
                $thongbao->daxem = 0;
                $thongbao->type = "napthe_".$id_napthe;

                $thongbao->save();
                return response()->json([
                    'napthe'=> 'success',
                    'code'=> mt_rand(1000000000000, 9999999999999),
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

    public function GetNhaMang(){
        $nhamang = nhamang::all();
        return response()->json($nhamang);
    }

    public function GetNhaMangById(Request $request) {
        $validator = Validator::make($request->all(),
            [
                'id' => 'required',
            ],
            [
                'id.required' => 'You have not entered telecom company\'s id',
            ]);
        $errs = $validator->errors();
        $err = $errs->all();
        if($validator->fails()){
            return response()->json([
                'get' => 'error',
                'message' => $err[0]
            ]);
        }
        $nhamang = nhamang::where('id', $request->id)->get();
        return response()->json([
            'get' => 'success',
            'nhamang'=> $nhamang[0],
        ]);
    }
}
