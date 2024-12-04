drop table if exists documents;
drop table if exists roles;
drop table if exists users;

create table if not exists users (
	user_id varchar(50) not null primary key,
	user_password varchar(68) not null,
	"active" smallint not null
);

create table if not exists roles (
	"user_id" varchar(50) not null,
	"role" varchar(50) not null,
	UNIQUE ("user_id" ,"role"),
	FOREIGN KEY ("user_id") REFERENCES users ("user_id")    
);

create table if not exists documents (
	document_id BIGSERIAL not null primary key,
	user_id varchar(50) not null,
	subject text not null,
	"content" text not null,
	modify_at timestamp not null,
	FOREIGN KEY ("user_id") REFERENCES users ("user_id")
);

insert into users("user_id", "user_password", "active") values
('nguyentrunglong', '{noop}123', 1),
('tranthanhha', '{noop}234', 1),
('doanhonghoa', '{noop}345', 1),
('doankimhau', '{noop}456', 1),
('phamthihoaithu', '{noop}567', 1);

insert into roles("user_id", "role") values
('nguyentrunglong', 'ROLE_MEMBER'),
('tranthanhha', 'ROLE_MEMBER'),
('doanhonghoa', 'ROLE_MEMBER'),
('doankimhau', 'ROLE_MEMBER'),
('phamthihoaithu', 'ROLE_MEMBER');

insert into documents("user_id", "subject", "content", "modify_at") values
('phamthihoaithu', 'Untitle 1', 'Draft Content 1', '2024-12-12 10:10:10'),
('phamthihoaithu', 'Untitle 2', 'Draft Content 2', '2024-12-12 10:10:10'),
('tranthanhha', 'Untitle 3', 'Draft Content 3', '2024-12-12 10:10:10');