-- Adminer 4.8.1 PostgreSQL 16.2 (Debian 16.2-1.pgdg120+2) dump

CREATE DATABASE demo
\connect "demo";

CREATE TABLE "public"."appointment" (
    "end_date" timestamp(6) NOT NULL,
    "id_app" bigint NOT NULL,
    "id_user_d" bigint NOT NULL,
    "id_user_p" bigint NOT NULL,
    "start_date" timestamp(6) NOT NULL,
    "title" character varying(255),
    CONSTRAINT "appointment_pkey" PRIMARY KEY ("id_app")
) WITH (oids = false);

INSERT INTO "appointment" ("end_date", "id_app", "id_user_d", "id_user_p", "start_date", "title") VALUES
('2024-04-23 00:00:00',	104,	104,	352,	'2024-04-22 00:00:00',	'Cita Oftalmologia'),
('2024-04-27 00:00:00',	105,	104,	355,	'2024-04-26 00:00:00',	'Psicologia'),
('2024-04-15 00:00:00',	153,	354,	352,	'2024-04-14 00:00:00',	'Neurologia'),
('2024-04-05 00:00:00',	154,	354,	355,	'2024-04-04 00:00:00',	'Fisioterapia');

CREATE TABLE "public"."rols" (
    "id_rol" bigint NOT NULL,
    "description" character varying(255),
    "name" character varying(255),
    CONSTRAINT "rols_pkey" PRIMARY KEY ("id_rol")
) WITH (oids = false);

INSERT INTO "rols" ("id_rol", "description", "name") VALUES
(1,	'User of system',	'Patient'),
(3,	'Worker of system',	'Doctor'),
(5,	'Admin of system',	'Admin');

CREATE TABLE "public"."users" (
    "created_at" timestamp(6) NOT NULL,
    "id_rol" bigint NOT NULL,
    "id_user" bigint NOT NULL,
    "avatar" character varying(255),
    "country" character varying(255),
    "lastname" character varying(255),
    "name" character varying(255),
    "password" character varying(255),
    "type" character varying(255),
    CONSTRAINT "users_pkey" PRIMARY KEY ("id_user")
) WITH (oids = false);

INSERT INTO "users" ("created_at", "id_rol", "id_user", "avatar", "country", "lastname", "name", "password", "type") VALUES
('2024-04-06 09:53:13',	3,	104,	'avatar3',	'London',	'Picaro',	'Harol',	'123',	NULL),
('2024-04-06 12:23:55',	5,	253,	'avatar7',	'nueva',	'nuevomas',	'nuevo',	'123',	NULL),
('2024-04-13 10:48:51',	1,	352,	'avatar2',	'Plaza',	'mas',	'Dima',	'123',	'patient'),
('2024-04-14 07:55:37',	5,	353,	'avatar1',	'Vedado',	'full',	'admin',	'123',	NULL),
('2024-04-14 07:57:49',	3,	354,	'avatar4',	'Paris',	'Sosa',	'Mirtica',	'123',	NULL),
('2024-04-14 07:58:30',	1,	355,	'avatar6',	'Murcia',	'antium',	'Adam',	'123',	NULL);

ALTER TABLE ONLY "public"."appointment" ADD CONSTRAINT "fk8ttno2dxsxvntrlako4phujtn" FOREIGN KEY (id_user_d) REFERENCES users(id_user) NOT DEFERRABLE;
ALTER TABLE ONLY "public"."appointment" ADD CONSTRAINT "fkqvc2pee91m66t5uqhq49ffrrc" FOREIGN KEY (id_user_p) REFERENCES users(id_user) NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users" ADD CONSTRAINT "fks5iqcyjr6uv576cd5wqcgnjjl" FOREIGN KEY (id_rol) REFERENCES rols(id_rol) NOT DEFERRABLE;

-- 2024-04-30 00:42:37.613663+00