<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class naptien extends Model
{
    protected $table = "naptien";

    public function NguoiNap(){
      return $this->belongsTo('App\User','users_id','id');
    }

    public function NhaMang(){
      return $this->hasMany('App\NapThe','nhamang_id','id');
    }
}
