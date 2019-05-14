<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class nganhang extends Model
{
    //
    protected $table ="nganhang";
    public function TaiKhoanNganHang(){
      return $this->hasOne('App\taikhoan','nganhang_id','id');
    }
}
