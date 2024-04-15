create table rols (id_rol bigint not null, desc varchar(255), name varchar(255), primary key (id_rol)) engine=InnoDB;
create table rols_seq (next_val bigint) engine=InnoDB;
insert into rols_seq values ( 1 );
create table users (created_at datetime(6) not null, id_rol bigint, id_user bigint not null, avatar varchar(255), country varchar(255), lastname varchar(255), name varchar(255), password varchar(255), type varchar(255), primary key (id_user)) engine=InnoDB;
create table users_seq (next_val bigint) engine=InnoDB;
insert into users_seq values ( 1 );
alter table users add constraint FKs5iqcyjr6uv576cd5wqcgnjjl foreign key (id_rol) references rols (id_rol);
create table appointment (end_date datetime(6) not null, id_app bigint not null, id_user_d bigint not null, id_user_p bigint not null, start_date datetime(6) not null, title varchar(255), primary key (id_app)) engine=InnoDB;
create table appointment_seq (next_val bigint) engine=InnoDB;
insert into appointment_seq values ( 1 );
create table rols (id_rol bigint not null, description varchar(255), name varchar(255), primary key (id_rol)) engine=InnoDB;
create table rols_seq (next_val bigint) engine=InnoDB;
insert into rols_seq values ( 1 );
create table users (created_at datetime(6) not null, id_rol bigint not null, id_user bigint not null, avatar varchar(255), country varchar(255), lastname varchar(255), name varchar(255), password varchar(255), type varchar(255), primary key (id_user)) engine=InnoDB;
create table users_seq (next_val bigint) engine=InnoDB;
insert into users_seq values ( 1 );
alter table appointment add constraint FK3j2pv2k98uoq9iiprbif7ynnv foreign key (id_user_d) references users (id_user);
alter table appointment add constraint FK2soupvopns3t6qao1894b438k foreign key (id_user_p) references users (id_user);
alter table users add constraint FKs5iqcyjr6uv576cd5wqcgnjjl foreign key (id_rol) references rols (id_rol);
create table rols (id_rol bigint not null, description varchar(255), name varchar(255), primary key (id_rol)) engine=InnoDB;
create table rols_seq (next_val bigint) engine=InnoDB;
insert into rols_seq values ( 1 );
create table users (created_at datetime(6) not null, id_rol bigint not null, id_user bigint not null, avatar varchar(255), country varchar(255), lastname varchar(255), name varchar(255), password varchar(255), type varchar(255), primary key (id_user)) engine=InnoDB;
create table users_seq (next_val bigint) engine=InnoDB;
insert into users_seq values ( 1 );
alter table users add constraint FKs5iqcyjr6uv576cd5wqcgnjjl foreign key (id_rol) references rols (id_rol);
create table appointment (end_date datetime(6) not null, id_app bigint not null, id_user_d bigint not null, id_user_p bigint not null, start_date datetime(6) not null, title varchar(255), primary key (id_app)) engine=InnoDB;
create table appointment_seq (next_val bigint) engine=InnoDB;
insert into appointment_seq values ( 1 );
create table rols (id_rol bigint not null, description varchar(255), name varchar(255), primary key (id_rol)) engine=InnoDB;
create table rols_seq (next_val bigint) engine=InnoDB;
insert into rols_seq values ( 1 );
create table users (created_at datetime(6) not null, id_rol bigint not null, id_user bigint not null, avatar varchar(255), country varchar(255), lastname varchar(255), name varchar(255), password varchar(255), type varchar(255), primary key (id_user)) engine=InnoDB;
create table users_seq (next_val bigint) engine=InnoDB;
insert into users_seq values ( 1 );
alter table appointment add constraint FK8ttno2dxsxvntrlako4phujtn foreign key (id_user_d) references users (id_user);
alter table appointment add constraint FKqvc2pee91m66t5uqhq49ffrrc foreign key (id_user_p) references users (id_user);
alter table users add constraint FKs5iqcyjr6uv576cd5wqcgnjjl foreign key (id_rol) references rols (id_rol);
create table appointment (end_date datetime(6) not null, id_app bigint not null, id_user_d bigint not null, id_user_p bigint not null, start_date datetime(6) not null, title varchar(255), primary key (id_app)) engine=InnoDB;
create table appointment_seq (next_val bigint) engine=InnoDB;
insert into appointment_seq values ( 1 );
create table rols (id_rol bigint not null, description varchar(255), name varchar(255), primary key (id_rol)) engine=InnoDB;
create table rols_seq (next_val bigint) engine=InnoDB;
insert into rols_seq values ( 1 );
create table users (created_at datetime(6) not null, id_rol bigint not null, id_user bigint not null, avatar varchar(255), country varchar(255), lastname varchar(255), name varchar(255), password varchar(255), type varchar(255), primary key (id_user)) engine=InnoDB;
create table users_seq (next_val bigint) engine=InnoDB;
insert into users_seq values ( 1 );
alter table appointment add constraint FK8ttno2dxsxvntrlako4phujtn foreign key (id_user_d) references users (id_user);
alter table appointment add constraint FKqvc2pee91m66t5uqhq49ffrrc foreign key (id_user_p) references users (id_user);
alter table users add constraint FKs5iqcyjr6uv576cd5wqcgnjjl foreign key (id_rol) references rols (id_rol);
create table appointment (end_date datetime(6) not null, id_app bigint not null, id_user_d bigint not null, id_user_p bigint not null, start_date datetime(6) not null, title varchar(255), primary key (id_app)) engine=InnoDB;
create table appointment_seq (next_val bigint) engine=InnoDB;
insert into appointment_seq values ( 1 );
create table rols (id_rol bigint not null, description varchar(255), name varchar(255), primary key (id_rol)) engine=InnoDB;
create table rols_seq (next_val bigint) engine=InnoDB;
insert into rols_seq values ( 1 );
create table users (created_at datetime(6) not null, id_rol bigint not null, id_user bigint not null, avatar varchar(255), country varchar(255), lastname varchar(255), name varchar(255), password varchar(255), type varchar(255), primary key (id_user)) engine=InnoDB;
create table users_seq (next_val bigint) engine=InnoDB;
insert into users_seq values ( 1 );
alter table appointment add constraint FK8ttno2dxsxvntrlako4phujtn foreign key (id_user_d) references users (id_user);
alter table appointment add constraint FKqvc2pee91m66t5uqhq49ffrrc foreign key (id_user_p) references users (id_user);
alter table users add constraint FKs5iqcyjr6uv576cd5wqcgnjjl foreign key (id_rol) references rols (id_rol);
create table appointment (end_date datetime(6) not null, id_app bigint not null, id_user_d bigint not null, id_user_p bigint not null, start_date datetime(6) not null, title varchar(255), primary key (id_app)) engine=InnoDB;
create table appointment_seq (next_val bigint) engine=InnoDB;
insert into appointment_seq values ( 1 );
create table rols (id_rol bigint not null, description varchar(255), name varchar(255), primary key (id_rol)) engine=InnoDB;
create table rols_seq (next_val bigint) engine=InnoDB;
insert into rols_seq values ( 1 );
create table users (created_at datetime(6) not null, id_rol bigint not null, id_user bigint not null, avatar varchar(255), country varchar(255), lastname varchar(255), name varchar(255), password varchar(255), type varchar(255), primary key (id_user)) engine=InnoDB;
create table users_seq (next_val bigint) engine=InnoDB;
insert into users_seq values ( 1 );
alter table appointment add constraint FK8ttno2dxsxvntrlako4phujtn foreign key (id_user_d) references users (id_user);
alter table appointment add constraint FKqvc2pee91m66t5uqhq49ffrrc foreign key (id_user_p) references users (id_user);
alter table users add constraint FKs5iqcyjr6uv576cd5wqcgnjjl foreign key (id_rol) references rols (id_rol);
create table appointment (end_date datetime(6) not null, id_app bigint not null, id_user_d bigint not null, id_user_p bigint not null, start_date datetime(6) not null, title varchar(255), primary key (id_app)) engine=InnoDB;
create table appointment_seq (next_val bigint) engine=InnoDB;
insert into appointment_seq values ( 1 );
create table rols (id_rol bigint not null, description varchar(255), name varchar(255), primary key (id_rol)) engine=InnoDB;
create table rols_seq (next_val bigint) engine=InnoDB;
insert into rols_seq values ( 1 );
create table users (created_at datetime(6) not null, id_rol bigint not null, id_user bigint not null, avatar varchar(255), country varchar(255), lastname varchar(255), name varchar(255), password varchar(255), type varchar(255), primary key (id_user)) engine=InnoDB;
create table users_seq (next_val bigint) engine=InnoDB;
insert into users_seq values ( 1 );
alter table appointment add constraint FK8ttno2dxsxvntrlako4phujtn foreign key (id_user_d) references users (id_user);
alter table appointment add constraint FKqvc2pee91m66t5uqhq49ffrrc foreign key (id_user_p) references users (id_user);
alter table users add constraint FKs5iqcyjr6uv576cd5wqcgnjjl foreign key (id_rol) references rols (id_rol);
create table appointment (end_date datetime(6) not null, id_app bigint not null, id_user_d bigint not null, id_user_p bigint not null, start_date datetime(6) not null, title varchar(255), primary key (id_app)) engine=InnoDB;
create table appointment_seq (next_val bigint) engine=InnoDB;
insert into appointment_seq values ( 1 );
create table rols (id_rol bigint not null, description varchar(255), name varchar(255), primary key (id_rol)) engine=InnoDB;
create table rols_seq (next_val bigint) engine=InnoDB;
insert into rols_seq values ( 1 );
create table users (created_at datetime(6) not null, id_rol bigint not null, id_user bigint not null, avatar varchar(255), country varchar(255), lastname varchar(255), name varchar(255), password varchar(255), type varchar(255), primary key (id_user)) engine=InnoDB;
create table users_seq (next_val bigint) engine=InnoDB;
insert into users_seq values ( 1 );
alter table appointment add constraint FK8ttno2dxsxvntrlako4phujtn foreign key (id_user_d) references users (id_user);
alter table appointment add constraint FKqvc2pee91m66t5uqhq49ffrrc foreign key (id_user_p) references users (id_user);
alter table users add constraint FKs5iqcyjr6uv576cd5wqcgnjjl foreign key (id_rol) references rols (id_rol);
create table appointment (end_date datetime(6) not null, id_app bigint not null, id_user_d bigint not null, id_user_p bigint not null, start_date datetime(6) not null, title varchar(255), primary key (id_app)) engine=InnoDB;
create table appointment_seq (next_val bigint) engine=InnoDB;
insert into appointment_seq values ( 1 );
create table rols (id_rol bigint not null, description varchar(255), name varchar(255), primary key (id_rol)) engine=InnoDB;
create table rols_seq (next_val bigint) engine=InnoDB;
insert into rols_seq values ( 1 );
create table users (created_at datetime(6) not null, id_rol bigint not null, id_user bigint not null, avatar varchar(255), country varchar(255), lastname varchar(255), name varchar(255), password varchar(255), type varchar(255), primary key (id_user)) engine=InnoDB;
create table users_seq (next_val bigint) engine=InnoDB;
insert into users_seq values ( 1 );
alter table appointment add constraint FK8ttno2dxsxvntrlako4phujtn foreign key (id_user_d) references users (id_user);
alter table appointment add constraint FKqvc2pee91m66t5uqhq49ffrrc foreign key (id_user_p) references users (id_user);
alter table users add constraint FKs5iqcyjr6uv576cd5wqcgnjjl foreign key (id_rol) references rols (id_rol);
create table appointment (end_date datetime(6) not null, id_app bigint not null, id_user_d bigint not null, id_user_p bigint not null, start_date datetime(6) not null, title varchar(255), primary key (id_app)) engine=InnoDB;
create table appointment_seq (next_val bigint) engine=InnoDB;
insert into appointment_seq values ( 1 );
create table rols (id_rol bigint not null, description varchar(255), name varchar(255), primary key (id_rol)) engine=InnoDB;
create table rols_seq (next_val bigint) engine=InnoDB;
insert into rols_seq values ( 1 );
create table users (created_at datetime(6) not null, id_rol bigint not null, id_user bigint not null, avatar varchar(255), country varchar(255), lastname varchar(255), name varchar(255), password varchar(255), type varchar(255), primary key (id_user)) engine=InnoDB;
create table users_seq (next_val bigint) engine=InnoDB;
insert into users_seq values ( 1 );
alter table appointment add constraint FK8ttno2dxsxvntrlako4phujtn foreign key (id_user_d) references users (id_user);
alter table appointment add constraint FKqvc2pee91m66t5uqhq49ffrrc foreign key (id_user_p) references users (id_user);
alter table users add constraint FKs5iqcyjr6uv576cd5wqcgnjjl foreign key (id_rol) references rols (id_rol);
create table appointment (end_date datetime(6) not null, id_app bigint not null, id_user_d bigint not null, id_user_p bigint not null, start_date datetime(6) not null, title varchar(255), primary key (id_app)) engine=InnoDB;
create table appointment_seq (next_val bigint) engine=InnoDB;
insert into appointment_seq values ( 1 );
create table rols (id_rol bigint not null, description varchar(255), name varchar(255), primary key (id_rol)) engine=InnoDB;
create table rols_seq (next_val bigint) engine=InnoDB;
insert into rols_seq values ( 1 );
create table users (created_at datetime(6) not null, id_rol bigint not null, id_user bigint not null, avatar varchar(255), country varchar(255), lastname varchar(255), name varchar(255), password varchar(255), type varchar(255), primary key (id_user)) engine=InnoDB;
create table users_seq (next_val bigint) engine=InnoDB;
insert into users_seq values ( 1 );
alter table appointment add constraint FK8ttno2dxsxvntrlako4phujtn foreign key (id_user_d) references users (id_user);
alter table appointment add constraint FKqvc2pee91m66t5uqhq49ffrrc foreign key (id_user_p) references users (id_user);
alter table users add constraint FKs5iqcyjr6uv576cd5wqcgnjjl foreign key (id_rol) references rols (id_rol);
create table appointment (end_date datetime(6) not null, id_app bigint not null, id_user_d bigint not null, id_user_p bigint not null, start_date datetime(6) not null, title varchar(255), primary key (id_app)) engine=InnoDB;
create table appointment_seq (next_val bigint) engine=InnoDB;
insert into appointment_seq values ( 1 );
create table rols (id_rol bigint not null, description varchar(255), name varchar(255), primary key (id_rol)) engine=InnoDB;
create table rols_seq (next_val bigint) engine=InnoDB;
insert into rols_seq values ( 1 );
create table users (created_at datetime(6) not null, id_rol bigint not null, id_user bigint not null, avatar varchar(255), country varchar(255), lastname varchar(255), name varchar(255), password varchar(255), type varchar(255), primary key (id_user)) engine=InnoDB;
create table users_seq (next_val bigint) engine=InnoDB;
insert into users_seq values ( 1 );
alter table appointment add constraint FK8ttno2dxsxvntrlako4phujtn foreign key (id_user_d) references users (id_user);
alter table appointment add constraint FKqvc2pee91m66t5uqhq49ffrrc foreign key (id_user_p) references users (id_user);
alter table users add constraint FKs5iqcyjr6uv576cd5wqcgnjjl foreign key (id_rol) references rols (id_rol);
create table appointment (end_date datetime(6) not null, id_app bigint not null, id_user_d bigint not null, id_user_p bigint not null, start_date datetime(6) not null, title varchar(255), primary key (id_app)) engine=InnoDB;
create table appointment_seq (next_val bigint) engine=InnoDB;
insert into appointment_seq values ( 1 );
create table rols (id_rol bigint not null, description varchar(255), name varchar(255), primary key (id_rol)) engine=InnoDB;
create table rols_seq (next_val bigint) engine=InnoDB;
insert into rols_seq values ( 1 );
create table users (created_at datetime(6) not null, id_rol bigint not null, id_user bigint not null, avatar varchar(255), country varchar(255), lastname varchar(255), name varchar(255), password varchar(255), type varchar(255), primary key (id_user)) engine=InnoDB;
create table users_seq (next_val bigint) engine=InnoDB;
insert into users_seq values ( 1 );
alter table appointment add constraint FK8ttno2dxsxvntrlako4phujtn foreign key (id_user_d) references users (id_user);
alter table appointment add constraint FKqvc2pee91m66t5uqhq49ffrrc foreign key (id_user_p) references users (id_user);
alter table users add constraint FKs5iqcyjr6uv576cd5wqcgnjjl foreign key (id_rol) references rols (id_rol);
create table appointment (end_date datetime(6) not null, id_app bigint not null, id_user_d bigint not null, id_user_p bigint not null, start_date datetime(6) not null, title varchar(255), primary key (id_app)) engine=InnoDB;
create table appointment_seq (next_val bigint) engine=InnoDB;
insert into appointment_seq values ( 1 );
create table rols (id_rol bigint not null, description varchar(255), name varchar(255), primary key (id_rol)) engine=InnoDB;
create table rols_seq (next_val bigint) engine=InnoDB;
insert into rols_seq values ( 1 );
create table users (created_at datetime(6) not null, id_rol bigint not null, id_user bigint not null, avatar varchar(255), country varchar(255), lastname varchar(255), name varchar(255), password varchar(255), type varchar(255), primary key (id_user)) engine=InnoDB;
create table users_seq (next_val bigint) engine=InnoDB;
insert into users_seq values ( 1 );
alter table appointment add constraint FK8ttno2dxsxvntrlako4phujtn foreign key (id_user_d) references users (id_user);
alter table appointment add constraint FKqvc2pee91m66t5uqhq49ffrrc foreign key (id_user_p) references users (id_user);
alter table users add constraint FKs5iqcyjr6uv576cd5wqcgnjjl foreign key (id_rol) references rols (id_rol);
create table appointment (end_date datetime(6) not null, id_app bigint not null, id_user_d bigint not null, id_user_p bigint not null, start_date datetime(6) not null, title varchar(255), primary key (id_app)) engine=InnoDB;
create table appointment_seq (next_val bigint) engine=InnoDB;
insert into appointment_seq values ( 1 );
create table rols (id_rol bigint not null, description varchar(255), name varchar(255), primary key (id_rol)) engine=InnoDB;
create table rols_seq (next_val bigint) engine=InnoDB;
insert into rols_seq values ( 1 );
create table users (created_at datetime(6) not null, id_rol bigint not null, id_user bigint not null, avatar varchar(255), country varchar(255), lastname varchar(255), name varchar(255), password varchar(255), type varchar(255), primary key (id_user)) engine=InnoDB;
create table users_seq (next_val bigint) engine=InnoDB;
insert into users_seq values ( 1 );
alter table appointment add constraint FK8ttno2dxsxvntrlako4phujtn foreign key (id_user_d) references users (id_user);
alter table appointment add constraint FKqvc2pee91m66t5uqhq49ffrrc foreign key (id_user_p) references users (id_user);
alter table users add constraint FKs5iqcyjr6uv576cd5wqcgnjjl foreign key (id_rol) references rols (id_rol);
