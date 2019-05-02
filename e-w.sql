-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-05-01 20:51:27.268

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

-- Table: users
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    ten varchar(255) NOT NULL,
    email varchar(255) NOT NULL ,
    password varchar(255) NOT NULL,
    sotaikhoan char(20) NOT NULL,
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

-- End of file.

