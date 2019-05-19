<?php
/**
 * Created by PhpStorm.
 * User: nghiapo
 * Date: 18/05/2019
 * Time: 23:00
 */

namespace App\Http\Controllers;

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

class AddMoneyToWallet
{
    public function getViewAddMoney()
    {
        return view("viewtest.addMoney");
    }


}