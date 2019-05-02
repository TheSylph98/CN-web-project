-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-05-02 16:41:05.642

-- tables
-- Table: chuyentien
CREATE TABLE chuyentien (
    id int NOT NULL AUTO_INCREMENT,
    sotien int NOT NULL DEFAULT 0,
    noidung text NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL,
    tk_ng_chuyen char(20) NOT NULL,
    tk_ng_nhan char(20) NOT NULL,
    CONSTRAINT chuyentien_pk PRIMARY KEY (id)
);

-- Table: migrations
CREATE TABLE migrations (
    id int NOT NULL AUTO_INCREMENT,
    migration varchar(255) NOT NULL,
    batch int NOT NULL,
    CONSTRAINT migrations_pk PRIMARY KEY (id)
);

-- Table: naptien
CREATE TABLE naptien (
    id int NOT NULL AUTO_INCREMENT,
    sotien int(11) NULL,
    ghichu text NOT NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL,
    tk_ng_nap char(20) NOT NULL,
    CONSTRAINT naptien_pk PRIMARY KEY (id)
);

-- Table: nganhang
CREATE TABLE nganhang (
    id int NOT NULL AUTO_INCREMENT,
    ten_nganhang varchar(255) NOT NULL,
    sodienthoai int NULL,
    diachi varchar(255) NULL,
    CONSTRAINT nganhang_pk PRIMARY KEY (id)
);

-- Table: taikhoan
CREATE TABLE taikhoan (
    sotaikhoan char(20) NOT NULL,
    id_user int NOT NULL,
    tongsotien int NOT NULL,
    nganhang_id int NOT NULL,
    updated_at timestamp NOT NULL,
    CONSTRAINT taikhoan_pk PRIMARY KEY (sotaikhoan)
);

-- Table: users
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    ten varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    diachi varchar(255) NULL,
    sodienthoai int NULL,
    remember_token varchar(100) NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL,
    CONSTRAINT users_pk PRIMARY KEY (id)
) COMMENT 'khach hang';

-- foreign keys
-- Reference: naptien_taikhoan (table: naptien)
ALTER TABLE naptien ADD CONSTRAINT naptien_taikhoan FOREIGN KEY naptien_taikhoan (tk_ng_nap)
    REFERENCES taikhoan (sotaikhoan);

-- Reference: taikhoan_chuyen (table: chuyentien)
ALTER TABLE chuyentien ADD CONSTRAINT taikhoan_chuyen FOREIGN KEY taikhoan_chuyen (tk_ng_chuyen)
    REFERENCES taikhoan (sotaikhoan);

-- Reference: taikhoan_nganhang (table: taikhoan)
ALTER TABLE taikhoan ADD CONSTRAINT taikhoan_nganhang FOREIGN KEY taikhoan_nganhang (nganhang_id)
    REFERENCES nganhang (id);

-- Reference: taikhoan_nhan (table: chuyentien)
ALTER TABLE chuyentien ADD CONSTRAINT taikhoan_nhan FOREIGN KEY taikhoan_nhan (tk_ng_nhan)
    REFERENCES taikhoan (sotaikhoan);

-- Reference: taikhoan_users (table: taikhoan)
ALTER TABLE taikhoan ADD CONSTRAINT taikhoan_users FOREIGN KEY taikhoan_users (id_user)
    REFERENCES users (id);

-- End of file.

