-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-05-02 07:38:42.238

-- tables
-- Table: chuyentien
CREATE TABLE chuyentien (
    id int NOT NULL AUTO_INCREMENT,
    sotien int NOT NULL DEFAULT 0,
    noidung text NULL,
    id_ng_chuyen int NOT NULL,
    id_ng_nhan int NOT NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL,
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
    id_user int NOT NULL,
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
    id int NOT NULL,
    sotaikhoan char(20) NOT NULL,
    tongsotien int NOT NULL,
    nganhang_id int NOT NULL,
    id_user int NOT NULL,
    CONSTRAINT taikhoan_pk PRIMARY KEY (id)
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
-- Reference: chuyentien_users_1 (table: chuyentien)
ALTER TABLE chuyentien ADD CONSTRAINT chuyentien_users_1 FOREIGN KEY chuyentien_users_1 (id_ng_chuyen)
    REFERENCES users (id);

-- Reference: chuyentien_users_2 (table: chuyentien)
ALTER TABLE chuyentien ADD CONSTRAINT chuyentien_users_2 FOREIGN KEY chuyentien_users_2 (id_ng_nhan)
    REFERENCES users (id);

-- Reference: naptien_users (table: naptien)
ALTER TABLE naptien ADD CONSTRAINT naptien_users FOREIGN KEY naptien_users (id_user)
    REFERENCES users (id);

-- Reference: taikhoan_nganhang (table: taikhoan)
ALTER TABLE taikhoan ADD CONSTRAINT taikhoan_nganhang FOREIGN KEY taikhoan_nganhang (nganhang_id)
    REFERENCES nganhang (id);

-- Reference: taikhoan_users (table: taikhoan)
ALTER TABLE taikhoan ADD CONSTRAINT taikhoan_users FOREIGN KEY taikhoan_users (id_user)
    REFERENCES users (id);

-- End of file.

