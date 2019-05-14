<?php
/**
 * Created by PhpStorm.
 * User: nghiapo
 * Date: 06/05/2019
 * Time: 16:09
 */

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\chuyentien;






class TransferController
{
    public function getViewTransfer()
    {
        return view("transferview");
    }

    public function postTransfer(Request $request)
    {
        if (!$request) {
            $sotien = $request->input("sotien");
            $tk_ng_nhan= $request->input("tk_nguoi_nhan");
            $ntoidung = $request->input("noidung");
            $tk_ng_gui= $request->input("tk_nguoi_gui");


            $chuyentien = new chuyentien();

            $chuyentien->sotien = $sotien;
            $chuyentien->noidung = $noidung;
            $chuyentien->tk_ng_chuyen = $tk_ng_nhan;
            $chuyentien->tk_ng_nhan = $tk_ng_gui;

            $chuyentien->save();
        }

    }



}