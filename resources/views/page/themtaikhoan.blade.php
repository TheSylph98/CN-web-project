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
    <div class="panel-heading"><h4>Them Tai Khoan</h4></div>
      <div class="panel-body">
        @if(count($errors) > 0)
            @foreach($errors->all() as $err)
                <div class="alert alert-danger">
                    <strong>{{ $err }}</strong><br/>
                </div>
            @endforeach
        @endif


        @if(session('message'))
					<div class="alert alert-success">
						<strong>{{ session('message') }}</strong>
					</div>
				@endif
        <form method="POST" action="them-tai-khoan">
          {{ csrf_field() }}
          <div>
            <label>Tên Người Dùng {{user_info->ten}}</label>
          </div>
          <br>
          <div>
            <label>So Tai Khoan</label>
            <input type="text" class="form-control" name="sotaikhoan" aria-describedby="basic-addon1">
          </div>
          <br>
          <div>
            <label>Ngan Hang</label>
            <select class="form-control" name="nganhang">
            @foreach($nganhang as $ngh)
            <option value="{{ngh->id}}">{{$ngh->ten_nganhang}}</option>
            @endforeach
          </select>
          </div>
          <br>
          <button type="submit" class="btn btn-primary">Submit</button>
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
