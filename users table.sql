create database newdb;
create table users(fullname varchar(255) NOT null, 
        email_address varchar(255) NOT null, 
        ref_no INT not null,
        hear_about varchar(20) ,
        appeal INT ,
        get_reminders varchar(255)  ,
        get_manual varchar(255) ,
        Recieve_news varchar(255) ,
        extra_comments TEXT);
use newdb;
select * from users;
drop table users