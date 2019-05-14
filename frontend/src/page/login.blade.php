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
     @if(session('message'))
        <div class="alert alert-danger">
          <strong>{{ session('message') }}</strong>
        </div>
      @endif
    <form action="" method="post">
      {{ csrf_field() }}
    <div>
        <label>Email</label>
        <input type="email" class="form-control input" placeholder="Địa Chỉ Email" name="email" value="{{ old('email') }}">
    </div>
    @if($errors->first('email'))
        <div class="alert alert-danger error-sec">
            <strong>{{ $errors->first('email') }}</strong>
        </div>
    @endif
    <br>
    <div>
        <label>Mật khẩu</label>
        <input type="password" class="form-control" placeholder="Mật Khẩu" name="password">
    </div>
      @if($errors->first('password'))
          <div class="alert alert-danger error-sec">
              <strong>{{ $errors->first('password') }}</strong><br/>
          </div>
      @endif
    <br>
    <div class="form-group">
        <button type="submit" class="btn btn-primary">Đăng nhập
        </button>
    </div>
    <div class="form-group" style="text-align: right; margin-bottom: 3em;">
        <a href="">Quên Mật Khẩu?</a>
    </div>
</form>
</body>
</html>
