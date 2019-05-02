<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function NguoiNapT(){
      return $this->hasMany('App\naptien','id_user','id');
    }
    
    public function NguoiChuyenT(){
      return $this->hasMany('App\chuyentien','id_ng_chuyen','id')
    }

    public function NguoiNhanT(){
      return $this->hasMany('App\chuyentien','id_ng_nhan','id');
    }

    public function TaiKhoan(){
      return $this->hasMany('App\taikhoan','id_user','id');
    }
}
