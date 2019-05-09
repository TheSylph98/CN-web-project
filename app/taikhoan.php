<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class taikhoan extends Model
{
    protected $table = "taiKhoan";
//
    public function User(){
      return $this->belongsTo('App\User','id_user','id');
    }

    public function NguoiNapT(){
      return $this->hasMany('App\naptien','tk_ng_nap','sotaikhoan');
    }

    public function NguoiChuyenT(){
        return $this->hasMany('App\chuyentien', 'tk_ng_chuyen', 'sotaikhoan');
    }

    public function NguoiNhanT(){
      return $this->hasMany('App\chuyentien','tk_ng_nhan','sotaikhoan');
    }

    public function NganHang(){
      return $this->belongsTo('App\nganhang','nganhang_id','id');
    }

}
