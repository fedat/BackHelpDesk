INSERT INTO funcionario (nombre_funcionario,apellido_funcionario ,cedula_funcionario ,correo_institucional ,telefono_funcionario,administrador,superadministrador ,contrasena,fecha_creacion, activo)
values('fernanda','toloza buitrago','1000185524','mafetoloza2922@gmail.com','111111111111',false,true,'$2b$10$qWXFKm.i4Yzhcj6VPLeALOfdtLHni8dodOQCgNLfTRFlSMKvv0fQK','2022-04-08 15:51:44.933-05', true);
INSERT INTO funcionario (nombre_funcionario,apellido_funcionario ,cedula_funcionario ,correo_institucional ,telefono_funcionario,administrador,superadministrador ,contrasena,fecha_creacion, activo)
values('calamardo','tentaculos','0180009898','calamardotentaculos@gmail.com','01800098987777',true,false,'$2b$10$9axwUy8GlE1dQqvH/eGQPOMzpMMPF/KwwQt/7/n3yfizHCxB88sSu','2022-04-15 22:49:41.286-05', true);
INSERT INTO funcionario (nombre_funcionario,apellido_funcionario ,cedula_funcionario ,correo_institucional ,telefono_funcionario,administrador,superadministrador ,contrasena,fecha_creacion, activo)
values('sonia','cardozo','23450987','sonia@gmail.com','23450987',false,false,'$2b$10$2CDLGrbIGqVotai7IuSCK.podCMFA/uAf7l8DcYmd1uFwr25TxFUS','2022-04-22 11:05:44.645-05', true);
INSERT INTO funcionario (nombre_funcionario,apellido_funcionario ,cedula_funcionario ,correo_institucional ,telefono_funcionario,administrador,superadministrador ,contrasena,fecha_creacion, activo)
values('melisa','marin fajardo','4567329999','meliisa.marin@gmail.com','45673299',true,false,'$2b$10$lrlO97RGskXEucvunkbPeuz.zUxC/jwLScjWjqYNPIxXdfKQ6zpQK','2022-04-15 23:32:16.274-05', true);

INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES (1,'Dirección General', null);	
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(2,'Oficina Asesora de Planeación',1);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(3,'Oficina Asesora Jurídica',1);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(4,'Oficina de Control Interno',1);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(5,'Subdirección de Investigación y Producción Científica',null);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(6,'Grupo de Antropología',5);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(7,'Grupo de Historia',5);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(8,'Área funcional de Publicaciones',5);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(9,'Área funcional de Librería',5);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(10,'Área funcional de Investigación Arqueológica',5);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(11,'Subdirección de Gestión del Patrimonio', null);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(12,'Grupo de Arqueología',11);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(13,'Grupo de Patrimonio',11);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(14,'Área funcional de Tecnologías aplicadas al Patrimonio y Patrimonio Cultural Sumergido',11);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(15,'Subdirección de Apropiación y relacionamiento con el ciudadano', null);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(16,'Área funcional de Biblioteca Especializada',15);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(17,'Área funcional de Museografía',15);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(18,'Área funcional de Relacionamiento con el Ciudadano',15);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(19,'Secretaría General', null);	
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(20,'Área funcional de gestión de Tesorería',19);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(21,'Área funcional de gestión de Contabilidad',19);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(22,'Area funcional de gestión de Presupuesto',19);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(23,'Área funcional de gestión de Talento Humano',19);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(24,'Área funcional de gestión de Contratos y Convenios',19);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(25,'Área funcional de gestión documental',19);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(26,'Área funcional de Archivo',19);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(27,'Área funcional de Correspondencia',19);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(28,'Área funcional de Almacén',19);
INSERT INTO dependencia (id_Dependencia,nombre_dependencia,dependencia_padre)
VALUES(29,'Área funcional de Tecnologías y Sistemas de Información',19);