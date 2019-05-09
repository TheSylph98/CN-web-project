<form action="/post-transfer" method="post">
    @csrf
    <label>tk nguoi gui</label>
    <input type="text" name="tk_nguoi_chuyen">
    <label>tk nguoi nhan</label>
    <input type="text" name="tk_nguoi_nhan">
    <label>so tien</label>
    <input type="number" name="sotien">
    <label>noi dung</label>
    <input type="text" name="noidung">
    <input type="submit" name="ok" value="xacnhan">
</form>