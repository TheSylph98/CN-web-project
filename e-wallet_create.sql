-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-05-17 05:31:17.763

-- tables
-- Table: chuyentien
CREATE TABLE chuyentien (
    id int NOT NULL AUTO_INCREMENT,
    sotien int NOT NULL,
    noidung text NOT NULL,
    time timestamp NOT NULL,
    id_chuyen int NOT NULL,
    id_nhan int NOT NULL,
    CONSTRAINT chuyentien_pk PRIMARY KEY (id)
);

-- Table: danhba
CREATE TABLE danhba (
    id int NOT NULL AUTO_INCREMENT,
    users_id int NOT NULL,
    friend_id int NOT NULL,
    CONSTRAINT danhba_pk PRIMARY KEY (id)
);

-- Table: loaihoadon
CREATE TABLE loaihoadon (
    id int NOT NULL AUTO_INCREMENT,
    tenloai varchar(255) NOT NULL,
    CONSTRAINT loaihoadon_pk PRIMARY KEY (id)
);

-- Table: napthe
CREATE TABLE napthe (
    id int NOT NULL AUTO_INCREMENT,
    sotien int NOT NULL,
    time timestamp NOT NULL,
    users_id int NOT NULL,
    nhamang_id int NOT NULL,
    CONSTRAINT napthe_pk PRIMARY KEY (id)
);

-- Table: naptien
CREATE TABLE naptien (
    id int NOT NULL AUTO_INCREMENT,
    sotien int NOT NULL,
    tk_nap char(20) NOT NULL,
    time timestamp NOT NULL,
    CONSTRAINT naptien_pk PRIMARY KEY (id)
);

-- Table: nganhang
CREATE TABLE nganhang (
    id int NOT NULL AUTO_INCREMENT,
    ten_nganhang varchar(255) NOT NULL,
    CONSTRAINT nganhang_pk PRIMARY KEY (id)
);

-- Table: nhamang
CREATE TABLE nhamang (
    id int NOT NULL AUTO_INCREMENT,
    tennhamang varchar(255) NOT NULL,
    CONSTRAINT nhamang_pk PRIMARY KEY (id)
);

-- Table: ruttien
CREATE TABLE ruttien (
    id int NOT NULL AUTO_INCREMENT,
    sotien int NOT NULL,
    tk_rut char(20) NOT NULL,
    time timestamp NOT NULL,
    CONSTRAINT ruttien_pk PRIMARY KEY (id)
);

-- Table: taikhoan
CREATE TABLE taikhoan (
    sotaikhoan char(20) NOT NULL,
    sotien int NOT NULL DEFAULT 5000000,
    nganhang_id int NOT NULL,
    users_id int NOT NULL,
    CONSTRAINT taikhoan_pk PRIMARY KEY (sotaikhoan)
);

-- Table: thanhtoan
CREATE TABLE thanhtoan (
    id int NOT NULL AUTO_INCREMENT,
    time timestamp NOT NULL,
    sotien int NOT NULL,
    loaihoadon_id int NOT NULL,
    noidung text NOT NULL,
    trangthai bool NOT NULL,
    users_id int NOT NULL,
    CONSTRAINT thanhtoan_pk PRIMARY KEY (id)
);

-- Table: thongbao
CREATE TABLE thongbao (
    id int NOT NULL AUTO_INCREMENT,
    tieude varchar(255) NOT NULL,
    noidung text NOT NULL,
    time timestamp NOT NULL,
    CONSTRAINT thongbao_pk PRIMARY KEY (id)
);

-- Table: users
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    ten varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(100) NOT NULL,
    diachi varchar(200) NOT NULL,
    sodienthoai int NOT NULL,
    remember_token varchar(100) NULL,
    sotien int NOT NULL DEFAULT 0,
    CONSTRAINT users_pk PRIMARY KEY (id)
);

-- foreign keys
-- Reference: chuyentien_users (table: chuyentien)
ALTER TABLE chuyentien ADD CONSTRAINT chuyentien_users FOREIGN KEY chuyentien_users (id_nhan)
    REFERENCES users (id);

-- Reference: chuyentien_users1 (table: chuyentien)
ALTER TABLE chuyentien ADD CONSTRAINT chuyentien_users1 FOREIGN KEY chuyentien_users1 (id_chuyen)
    REFERENCES users (id);

-- Reference: danhba_users (table: danhba)
ALTER TABLE danhba ADD CONSTRAINT danhba_users FOREIGN KEY danhba_users (friend_id)
    REFERENCES users (id);

-- Reference: danhba_users1 (table: danhba)
ALTER TABLE danhba ADD CONSTRAINT danhba_users1 FOREIGN KEY danhba_users1 (users_id)
    REFERENCES users (id);

-- Reference: napthe_nhamang (table: napthe)
ALTER TABLE napthe ADD CONSTRAINT napthe_nhamang FOREIGN KEY napthe_nhamang (nhamang_id)
    REFERENCES nhamang (id);

-- Reference: napthe_users (table: napthe)
ALTER TABLE napthe ADD CONSTRAINT napthe_users FOREIGN KEY napthe_users (users_id)
    REFERENCES users (id);

-- Reference: naptien_taikhoan (table: naptien)
ALTER TABLE naptien ADD CONSTRAINT naptien_taikhoan FOREIGN KEY naptien_taikhoan (tk_nap)
    REFERENCES taikhoan (sotaikhoan);

-- Reference: ruttien_taikhoan (table: ruttien)
ALTER TABLE ruttien ADD CONSTRAINT ruttien_taikhoan FOREIGN KEY ruttien_taikhoan (tk_rut)
    REFERENCES taikhoan (sotaikhoan);

-- Reference: taikhoan_nganhang (table: taikhoan)
ALTER TABLE taikhoan ADD CONSTRAINT taikhoan_nganhang FOREIGN KEY taikhoan_nganhang (nganhang_id)
    REFERENCES nganhang (id);

-- Reference: taikhoan_users (table: taikhoan)
ALTER TABLE taikhoan ADD CONSTRAINT taikhoan_users FOREIGN KEY taikhoan_users (users_id)
    REFERENCES users (id);

-- Reference: thanhtoan_loaihoadon (table: thanhtoan)
ALTER TABLE thanhtoan ADD CONSTRAINT thanhtoan_loaihoadon FOREIGN KEY thanhtoan_loaihoadon (loaihoadon_id)
    REFERENCES loaihoadon (id);

-- Reference: thanhtoan_users (table: thanhtoan)
ALTER TABLE thanhtoan ADD CONSTRAINT thanhtoan_users FOREIGN KEY thanhtoan_users (users_id)
    REFERENCES users (id);

-- End of file.

