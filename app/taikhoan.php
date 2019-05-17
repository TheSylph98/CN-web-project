<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class taikhoan extends Model
{
    protected $table = "taikhoan";

    public function User(){
      return $this->belongsTo('App\User','users_id','id');
    }

    public function NguoiNapT(){
      return $this->hasMany('App\naptien','tk_nap','sotaikhoan');
    }

    public function NganHang(){
      return $this->belongsTo('App\nganhang','nganhang_id','id');
    }

    public function RutTien(){
      return $this->hasMany('App\taikhoan','tk_rut','id');
    }
}
