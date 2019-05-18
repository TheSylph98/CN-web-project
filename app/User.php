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
        'id','ten', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function TaiKhoan(){
      return $this->hasMany('App\taikhoan','users_id','id');
    }

    public function NapThe(){
      return $this->hasMany('App\napthe','users_id','id');
    }

    public function NChuyenTien(){
      return $this->hasMany('App\chuyentien','id_chuyen','id');
    }

    public function NNhanTien(){
      return $this->hasMany('App\chuyentien','id_nhan','id');
    }

    public function ThanhToan(){
      return $this->hasMany('App\thanhtoan','users_id','id');
    }

    public function DanhBa(){
      return $this->hasMany('App\danhba','users_id','id');
    }

    public function FriendDanhBa(){
      return $this->hasMany('App\danhba','friend_id','id');
    }

    public function NNapTien(){
       return $this->hasMany('App\naptien','users_id'.'id');
    }
    public function NRutTien(){
      return $this->hasMany('App\ruttien','users_id','id');
    }
}
