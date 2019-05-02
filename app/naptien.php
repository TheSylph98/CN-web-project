<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class naptien extends Model
{
    protected $table = "naptien";

    public function NguoiNap(){
      return $this->belongsTo('App\User','id_user','id');
    }
    
}
