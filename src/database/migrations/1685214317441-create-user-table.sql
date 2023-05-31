create schema farmaki;

create table farmaki.user (
  id serial primary key,
  fullName varchar(255) not null,
  password varchar(255) not null,
  email varchar(255) not null,
  role varchar(255) default 'USER',
);