<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class taikhoan extends Model
{
    //
    protected $table = "taikhoan";

    public function TaiKhoanUser(){
      return $this->belongsTo('App\User','id_user','id');
    }

    public function NganHang(){
      return $this->belongsTo('App\nganhang','nganhang_id','id');
    }
}
