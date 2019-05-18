<html>
<form action="post-transfer" method="POST">
    @csrf
    <label>sotien</label>
    <input type="number" name="sotien">
    <br>
    <label>email</label>
    <input type="text" name="email_nhan">
    <br/>
    <label>noidung</label>
    <input type="text" name="noidung">
    <br/>
    <button type="submit" name="Ok">OK</button>
</form>
</html>