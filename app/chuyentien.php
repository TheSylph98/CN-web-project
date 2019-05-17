<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class chuyentien extends Model
{
    //
    protected $table = "chuyentien";

    public function NguoiChuyen(){
      return $this->belongsTo('App\User','id_chuyen','id');
    }
    public function NguoiNhan(){
      return $this->belongsTo('App\User','id_nhan','id');
    }
}
