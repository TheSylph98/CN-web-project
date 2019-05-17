<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class taikhoan extends Model
{
    protected $table = "taikhoan";

    public function User(){
      return $this->belongsTo('App\User','users_id','id');
    }

    public function NganHang(){
      return $this->belongsTo('App\nganhang','nganhang_id','id');
    }

}
