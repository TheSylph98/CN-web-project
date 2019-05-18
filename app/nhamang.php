<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class nhamang extends Model
{
    //
    protected $table = "nhamang";
    public function NapThe(){
      return $this->belongsTo('App\napthe','nhamang_id','id');
    }
}
