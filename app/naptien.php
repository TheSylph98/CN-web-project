<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class naptien extends Model
{
    protected $table = "naptien";

    public function NguoiNap(){
      return $this->belongsTo('App\taikhoan','tk_nap','sotaikhoan');
    }

}
