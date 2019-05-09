<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class chuyentien extends Model
{
    //
    protected $table = "chuyentien";

    public function NguoiChuyen(){
      return $this->belongsTo('App\taikhoan','tk_ng_chuyen','sotaikhoan');
    }
    public function NguoiNhan(){
      return $this->belongsTo('App\taikhoan','tk_ng_nhan','sotaikhoan');
    }


    protected $fillable = ['id', 'sotien', 'noidung', 'created_at', 'updated_at', 'tk_ng_nhan', 'tk_ng_chuyen'];
}
