<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class thanhtoan extends Model
{
    //
    protected $table = "thanhtoan";
    public function HoaDon(){
      return $this->hasMany('App\hoadon','hoadon_id','id');
    }
    public function User(){
      return $this->belongsTo('App\User','users_id','id');
    }
}
