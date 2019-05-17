<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class danhba extends Model
{
    //
    protected $table ="danhba";
    public function User(){
      return $this->belongsTo('App\User','users_id','id');
    }
    public function Friend(){
      return $this->belongsTo('App\User','friend_id','id');
    }
}
