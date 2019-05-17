<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class thanhtoan extends Model
{
    //
    protected $table = "thanhtoan";
    public function LoaiHoaDon(){
      return $this->hasMany('App\loaihoadon','loaihoadon_id','id');
    }
    public function User(){
      return $this->belongsTo('App\User','users_id','id');
    }
}
