<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ruttien extends Model
{
    //
    protected $table = "ruttien";
    public function NguoiRut(){
      return $this->belongsTo('App\User','users_id','id');
    }
}
