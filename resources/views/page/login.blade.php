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
    <form action="" method="post">
      {{ csrf_field() }}
    <div>
        <label>Email</label>
        <input type="email" class="form-control input" placeholder="Địa Chỉ Email" name="email" value="">
    </div>
        <div class="alert alert-danger error-sec">
            <strong></strong>
        </div>
    <br>
    <div>
        <label>Mật khẩu</label>
        <input type="password" class="form-control" placeholder="Mật Khẩu" name="password">
    </div>
        <div class="alert alert-danger error-sec">
            <strong></strong><br/>
        </div>
    <br>
    <div class="form-group">
        <button type="submit" class="btn btn-primary">Đăng nhập
        </button>
    </div>
    <div> <a href="">Quên Mật Khẩu?</a> </div>
</form>
</body>
</html>
