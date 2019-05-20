<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class hoadon extends Model
{
    //
    protected $table='hoadon';

    public function ThanhToan(){
      return $this->belongsTo('App\thanhtoan','hoadon_id','id');
    }

    public function LoaiHoaDon(){
      return $this->hasMany('App\loaihoadon','loaihoadon_id','id');
    }
}
