<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>E-Wallet</title>
</head>
<body>
  <div class="container">

<!-- slider -->
<div class="row carousel-holder">
  <div class="col-md-2">
  </div>
  <div class="col-md-8">
    <div class="panel panel-default">
    <div class="panel-heading"><h4>Đăng ký tài khoản</h4></div>
      <div class="panel-body">
          <div class="alert alert-success">
            <strong></strong>
          </div>
        <form method="" action="">
          {{ csrf_field() }}
          <div>
            <label>Tên Người Dùng</label>
            <input type="text" class="form-control" placeholder="Nhập tên của bạn" name="username" aria-describedby="basic-addon1">
          </div>
          <br>
          <div>
            <label>Địa Chỉ Email</label>
            <input type="email" class="form-control" placeholder="Nhập Địa Chỉ Email" name="email" aria-describedby="basic-addon1">
          </div>
          <br>
          <div>
            <label>Số tài khoản</label>
            <input type="text" class="form-control" name="sotaikhoan" aria-describedby="basic-addon1">
          </div>
          <br>
          <div>
            <label>Địa chỉ</label>
            <input type="text" class="form-control" name="diachi" aria-describedby="basic-addon1">
          </div>
          <br>
          <div>
            <label>Số Điện Thoại</label>
            <input type="text" class="form-control" name="sodienthoai" aria-describedby="basic-addon1">
          </div>
          <br>
          <div>
            <label>Mật khẩu</label>
            <input type="password" class="form-control" name="password" aria-describedby="basic-addon1" placeholder="Nhập Mật Khẩu">
          </div>
          <br>
          <div>
            <label>Xác Nhận mật khẩu</label>
            <input type="password" class="form-control" name="password_again" aria-describedby="basic-addon1" placeholder="Nhập lại Mật Khẩu">
          </div>
          <br>
          <button type="submit" class="btn btn-primary">Đăng Ký</button>
        </form>
      </div>
    </div>
  </div>
  <div class="col-md-2">
  </div>
</div>
<!-- end slide -->
</div>
</body>
</html>
