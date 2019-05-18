<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class napthe extends Model
{
    //
    protected $table = "napthe";
    public function Nhamang(){
      return $this->hasMany('App\nhamang','nhamang_id','id');
    }
    public function User(){
      return $this->belongsTo('App\User','users_id','id');
    }
}
