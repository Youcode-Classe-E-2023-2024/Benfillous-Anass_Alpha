create table password_recovery
(
    pwd_reset_id       int(6) unsigned auto_increment
        primary key,
    pwd_reset_email    varchar(100) not null,
    pwd_reset_selector varchar(50)  not null,
    pwd_reset_token    text         not null,
    pwd_reset_expires  bigint       not null
);

create table user
(
    user_id  int auto_increment
        primary key,
    username varchar(25)  null,
    email    varchar(25)  null,
    password varchar(250) null,
    picture  text         null
);

create table notification
(
    notification_id int auto_increment
        primary key,
    notification    text                 null,
    user_id         int                  null,
    seen            tinyint(1) default 0 null,
    constraint notification_ibfk_1
        foreign key (user_id) references user (user_id)
);

create index user_id
    on notification (user_id);
