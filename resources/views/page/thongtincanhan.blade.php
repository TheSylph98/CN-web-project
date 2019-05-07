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
				<div class="panel-heading"><h4>Thông tin ca nhan</h4></div>
				<div class="panel-body">
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
					<form action="quan-li-thong-tin" method="POST">
						{{ csrf_field() }}
						<div>
							<label>Tên Người Dùng</label>
							<input type="text" class="form-control" name="username" value="{{ $user_info->ten }}">
						</div>
						<br>
						<div>
							<label>Địa Chỉ Email</label>
							<input type="email" class="form-control" name="email" value="{{ $user_info->email }}"
							readonly
							>
						</div>
						<br>
            <div>
							<label>Dia chi</label>
							<input type="text" class="form-control" name="diachi" value="{{ $user_info->diachi }}">
						</div>
						<br>
            <div>
							<label>So DT</label>
							<input type="text" class="form-control" name="sodt" value="{{ $user_info->sodienthoai }}">
						</div>
						<br>
            <div>
							<label>Tai khoan</label>
              @foreach($tk as $taikhoan)
                <br>
  							<input type="text" class="form-control" name="nganhang"  value="{{ $taikhoan->NganHang->ten_nganhang }}">
                <br>
                @if($taikhoan->sotaikhoan != 0)
                <input type="text" class="form-control" name="taikhoan"  value="{{ $taikhoan->sotaikhoan }}">
                @else
                <input type="text" class="form-control" name="taikhoan"><strong>Chua cap nhat</strong>
                @endif
              @endforeach
						</div>
						<br>
						<div class="form-group">
							<p><label>Bạn có muốn thay đổi mật khẩu?</label></p>
							<p>
								<label class="radio-inline">
									<input name="change_password" id="yes" class="radio-change" value="1"
									type="radio"><span for="yes">Có</span>
								</label>
								<label class="radio-inline">
									<input name="change_password" id="no" class="radio-change" value="0"
									type="radio" checked=""><span for="no">Không</span>
								</label>
							</p>
							<input class="form-control input-width disabled-field" type="password" name="password" placeholder="Nhập mật khẩu" disabled="" />
						</div>

						<div class="form-group">
							<p><label>Xác nhận Mật khẩu</label></p>
							<input class="form-control input-width disabled-field" type="password" name="password_again" placeholder="Nhập lại mật khẩu" disabled="" />
						</div>
						<br>
						<button type="submit" class="btn btn-primary">Save
						</button>
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
