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
  @if(count($errors) > 0)
  <div class="alert alert-danger">
    @foreach($errors->all() as $err)
    <strong>{{ $err }}</strong><br/>
    @endforeach
  </div>
  @endif

  @if(session('message'))
  <div class="alert alert-success">
    <strong>{{ session('message') }}</strong>
  </div>
  @endif
  <form action="quan-ly-thong-tin" method="POST">
    {{ csrf_field() }}
    <div>
      <label>Địa Chỉ Email</label>
      <input type="email" class="form-control" name="email" aria-describedby="basic-addon1" value=""
      readonly>
    </div>
    <br>
    <div>
      <label>Noi Dung</label>
      <input type="text" class="form-control" name="noidung"  value="">
    </div>
    <br>
    <button type="submit" class="btn btn-primary">Gui
    </button>
  </form>
</body>
</html>
