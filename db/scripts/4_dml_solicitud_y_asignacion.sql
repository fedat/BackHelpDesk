INSERT INTO solicitud (solicitud_padre,id_funcionario, estado, id_dependencia, nivel_criticidad, tiempo_respuesta, fecha_creacion,fecha_cierre,detalle_solicitud,id_subcategoria)
VALUES(null,1,'en proceso',4,'alta','12','2022-04-15 17:18:49.958-05', null,'no me aparece servicio de red y a mis compañeros sí',148);
INSERT INTO solicitud (solicitud_padre,id_funcionario, estado, id_dependencia, nivel_criticidad, tiempo_respuesta, fecha_creacion,fecha_cierre,detalle_solicitud,id_subcategoria)
VALUES(null,2,'en proceso',12,'baja','6','2022-04-15 17:18:49.958-05', null,'la impresora está fallando',155);
INSERT INTO solicitud (solicitud_padre,id_funcionario, estado, id_dependencia, nivel_criticidad, tiempo_respuesta, fecha_creacion,fecha_cierre,detalle_solicitud,id_subcategoria)
VALUES(null,1,'en proceso',3,'baja','6','2022-04-15 23:01:09.171-05', null,'google está lento',134);
INSERT INTO solicitud (solicitud_padre,id_funcionario, estado, id_dependencia, nivel_criticidad, tiempo_respuesta, fecha_creacion,fecha_cierre,detalle_solicitud,id_subcategoria)
VALUES(null,3,'en proceso',4,'baja','12','2022-04-15 23:18:40.896-0', null,'se abrió el cable del portatil',14);
INSERT INTO solicitud (solicitud_padre,id_funcionario, estado, id_dependencia, nivel_criticidad, tiempo_respuesta, fecha_creacion,fecha_cierre,detalle_solicitud,id_subcategoria)
VALUES(null,4,'en proceso',4,'alta','6','2022-04-15 17:01:25.206-05', null,'no enciende la tablet, ayer prendía y hoy ya no',16);
INSERT INTO solicitud (solicitud_padre,id_funcionario, estado, id_dependencia, nivel_criticidad, tiempo_respuesta, fecha_creacion,fecha_cierre,detalle_solicitud,id_subcategoria)
VALUES(null,4,'en proceso',4,'alta','6','2022-05-13 00:29:08.823-05', null,'necesito un cargador para pc lenovo ref xxxyz',14);

INSERT INTO asignacion (id_administrador,no_ticket, fecha_creacion,estado)
VALUES(2,1,'2022-05-15 20:22:44.563-05', true);
INSERT INTO asignacion (id_administrador,no_ticket, fecha_creacion,estado)
VALUES(4,2,'2022-05-15 20:22:44.563-05', true);
INSERT INTO asignacion (id_administrador,no_ticket, fecha_creacion,estado)
VALUES(4,3,'2022-05-15 20:22:44.563-05', true);
INSERT INTO asignacion (id_administrador,no_ticket, fecha_creacion,estado)
VALUES(2,4,'2022-05-15 20:22:44.563-05', true);
