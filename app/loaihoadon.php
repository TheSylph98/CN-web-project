<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class loaihoadon extends Model
{
    //
    protected $table ="loaihoadon";
    public function ThanhToan(){
      return $this->belongsTo('App\hoadon','loaihoadon_id','id');
    }
}
