-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-05-20 10:17:32.757

-- tables
-- Table: chuyentien
CREATE TABLE chuyentien (
    sotien int(11) NOT NULL,
    noidung text NOT NULL,
    time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    id_chuyen int(11) NULL,
    id_nhan int(11) NULL,
    created_at timestamp NULL DEFAULT NULL,
    updated_at timestamp NULL DEFAULT NULL,
    id int(11) NOT NULL AUTO_INCREMENT,
    CONSTRAINT chuyentien_pk PRIMARY KEY (id)
) ENGINE InnoDB CHARACTER SET latin1;

CREATE INDEX chuyentien_users ON chuyentien (id_nhan);

CREATE INDEX chuyentien_users1 ON chuyentien (id_chuyen);

-- Table: danhba
CREATE TABLE danhba (
    users_id int(11) NOT NULL,
    friend_id int(11) NOT NULL,
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updated_at timestamp NULL DEFAULT NULL,
    id int(11) NOT NULL AUTO_INCREMENT,
    CONSTRAINT danhba_pk PRIMARY KEY (id)
) ENGINE InnoDB CHARACTER SET latin1;

CREATE INDEX danhba_users ON danhba (friend_id);

CREATE INDEX danhba_users1 ON danhba (users_id);

-- Table: hoadon
CREATE TABLE hoadon (
    id int NOT NULL AUTO_INCREMENT,
    mahoadon varchar(20) NOT NULL,
    sotien int NOT NULL,
    ten_nhacungcap varchar(255) NOT NULL,
    loaihoadon_id int(11) NOT NULL,
    CONSTRAINT hoadon_pk PRIMARY KEY (id)
);

-- Table: loaihoadon
CREATE TABLE loaihoadon (
    tenloai varchar(255) NOT NULL,
    id int(11) NOT NULL AUTO_INCREMENT,
    CONSTRAINT loaihoadon_pk PRIMARY KEY (id)
) ENGINE InnoDB CHARACTER SET latin1;

-- Table: napthe
CREATE TABLE napthe (
    sotien int(11) NOT NULL,
    users_id int(11) NULL DEFAULT NULL,
    nhamang_id int(11) NOT NULL,
    created_at timestamp NULL DEFAULT NULL,
    updated_at timestamp NULL DEFAULT NULL,
    id int(11) NOT NULL AUTO_INCREMENT,
    CONSTRAINT napthe_pk PRIMARY KEY (id)
) ENGINE InnoDB CHARACTER SET latin1;

CREATE INDEX napthe_nhamang ON napthe (nhamang_id);

CREATE INDEX napthe_users ON napthe (users_id);

-- Table: naptien
CREATE TABLE naptien (
    sotien int(11) NOT NULL,
    time timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    users_id int(11) NULL,
    created_at timestamp NULL DEFAULT NULL,
    updated_at timestamp NULL DEFAULT NULL,
    id int(11) NOT NULL AUTO_INCREMENT,
    CONSTRAINT naptien_pk PRIMARY KEY (id)
) ENGINE InnoDB CHARACTER SET latin1;

CREATE INDEX naptien_users ON naptien (users_id);

-- Table: nganhang
CREATE TABLE nganhang (
    ten_nganhang varchar(255) NOT NULL,
    id int(11) NOT NULL AUTO_INCREMENT,
    CONSTRAINT nganhang_pk PRIMARY KEY (id)
) ENGINE InnoDB CHARACTER SET latin1;

-- Table: nhamang
CREATE TABLE nhamang (
    tennhamang varchar(255) NOT NULL,
    id int(11) NOT NULL AUTO_INCREMENT,
    CONSTRAINT nhamang_pk PRIMARY KEY (id)
) ENGINE InnoDB CHARACTER SET latin1;

-- Table: ruttien
CREATE TABLE ruttien (
    sotien int(11) NOT NULL,
    time timestamp NULL DEFAULT NULL,
    users_id int(11) NULL,
    created_at timestamp NULL DEFAULT NULL,
    updated_at timestamp NULL DEFAULT NULL,
    id int(11) NOT NULL AUTO_INCREMENT,
    CONSTRAINT ruttien_pk PRIMARY KEY (id)
) ENGINE InnoDB CHARACTER SET latin1;

CREATE INDEX ruttien_users ON ruttien (users_id);

-- Table: taikhoan
CREATE TABLE taikhoan (
    sotaikhoan char(20) NOT NULL,
    sotien int(11) NOT NULL DEFAULT '5000000',
    nganhang_id int(11) NOT NULL,
    users_id int(11) NULL DEFAULT NULL,
    created_at timestamp NULL DEFAULT NULL,
    updated_at timestamp NULL DEFAULT NULL,
    id int(11) NOT NULL AUTO_INCREMENT,
    CONSTRAINT taikhoan_pk PRIMARY KEY (id)
) ENGINE InnoDB CHARACTER SET latin1;

CREATE INDEX taikhoan_nganhang ON taikhoan (nganhang_id);

CREATE INDEX taikhoan_users ON taikhoan (users_id);

-- Table: thanhtoan
CREATE TABLE thanhtoan (
    id int NOT NULL AUTO_INCREMENT,
    created_at timestamp NOT NULL,
    update_at timestamp NOT NULL,
    users_id int(11) NOT NULL,
    hoadon_id int NOT NULL,
    CONSTRAINT thanhtoan_pk PRIMARY KEY (id)
);

-- Table: thongbao
CREATE TABLE thongbao (
    id int(11) NOT NULL AUTO_INCREMENT,
    tieude varchar(255) NOT NULL,
    noidung text NOT NULL,
    time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_at timestamp NULL DEFAULT NULL,
    updated_at timestamp NULL DEFAULT NULL,
    daxem varchar(45) NULL DEFAULT NULL,
    type varchar(45) NOT NULL,
    users_id int(11) NOT NULL,
    CONSTRAINT thongbao_pk PRIMARY KEY (id)
) ENGINE InnoDB CHARACTER SET latin1;

-- Table: users
CREATE TABLE users (
    ten varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(100) NOT NULL,
    diachi varchar(200) NULL DEFAULT NULL,
    sodienthoai int(11) NULL DEFAULT NULL,
    remember_token varchar(100) NULL DEFAULT NULL,
    sotien int(11) NULL DEFAULT '0',
    created_at timestamp NULL DEFAULT NULL,
    updated_at timestamp NULL DEFAULT NULL,
    id int(11) NOT NULL AUTO_INCREMENT,
    CONSTRAINT users_pk PRIMARY KEY (id)
) ENGINE InnoDB CHARACTER SET latin1;

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

-- Reference: hoadon_loaihoadon (table: hoadon)
ALTER TABLE hoadon ADD CONSTRAINT hoadon_loaihoadon FOREIGN KEY hoadon_loaihoadon (loaihoadon_id)
    REFERENCES loaihoadon (id);

-- Reference: napthe_nhamang (table: napthe)
ALTER TABLE napthe ADD CONSTRAINT napthe_nhamang FOREIGN KEY napthe_nhamang (nhamang_id)
    REFERENCES nhamang (id);

-- Reference: napthe_users (table: napthe)
ALTER TABLE napthe ADD CONSTRAINT napthe_users FOREIGN KEY napthe_users (users_id)
    REFERENCES users (id);

-- Reference: naptien_users (table: naptien)
ALTER TABLE naptien ADD CONSTRAINT naptien_users FOREIGN KEY naptien_users (users_id)
    REFERENCES users (id);

-- Reference: ruttien_users (table: ruttien)
ALTER TABLE ruttien ADD CONSTRAINT ruttien_users FOREIGN KEY ruttien_users (users_id)
    REFERENCES users (id);

-- Reference: taikhoan_nganhang (table: taikhoan)
ALTER TABLE taikhoan ADD CONSTRAINT taikhoan_nganhang FOREIGN KEY taikhoan_nganhang (nganhang_id)
    REFERENCES nganhang (id);

-- Reference: taikhoan_users (table: taikhoan)
ALTER TABLE taikhoan ADD CONSTRAINT taikhoan_users FOREIGN KEY taikhoan_users (users_id)
    REFERENCES users (id);

-- Reference: thanhtoan_hoadon (table: thanhtoan)
ALTER TABLE thanhtoan ADD CONSTRAINT thanhtoan_hoadon FOREIGN KEY thanhtoan_hoadon (hoadon_id)
    REFERENCES hoadon (id);

-- Reference: thanhtoan_users (table: thanhtoan)
ALTER TABLE thanhtoan ADD CONSTRAINT thanhtoan_users FOREIGN KEY thanhtoan_users (users_id)
    REFERENCES users (id);

-- Reference: thongbao_users (table: thongbao)
ALTER TABLE thongbao ADD CONSTRAINT thongbao_users FOREIGN KEY thongbao_users (users_id)
    REFERENCES users (id);

-- End of file.

