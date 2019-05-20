<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class thongbao extends Model
{
    //
    protected $table = "thongbao";

    public function User(){
      return $this->belongsTo('App\User','users_id','id');
    }

}
