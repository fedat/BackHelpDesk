--TABLES
--ejecutar
Create table  funcionario(
	nombre_funcionario varchar not null ,
	apellido_funcionario varchar not null,
	cedula_funcionario  varchar unique not null,
	correo_institucional varchar unique not null,
	telefono_funcionario varchar not null,
	administrador boolean not null,
	superadministrador boolean not null,
	contrasena varchar not null,
	fecha_creacion date not null,
	activo boolean not null
);
alter table funcionario owner to icanh_user;

Create table asignacion(
	id_administrador integer not null,
	no_ticket integer not null,
	fecha_creacion date not null,
	estado boolean not null
);
alter table asignacion owner to icanh_user;

Create table dependencia(
	nombre_dependencia varchar not null ,
	dependencia_padre integer
);
alter table dependencia owner to icanh_user;

Create table tipo_solicitud(
	nombre_tipo varchar not null 
);
alter table tipo_solicitud owner to icanh_user;

Create table soporte(
	nombre_soporte varchar not null ,
	id_tipo integer not null 
);
alter table soporte owner to icanh_user;

Create table subcategoria_soporte(
	id_soporte integer not null ,
	subcategoria varchar not null 
);
alter table subcategoria_soporte owner to icanh_user;

Create table evidencia(
	no_ticket integer not null ,
	nombre_imagen varchar not null ,
	direccion varchar not null ,
	tipo_imagen varchar not null 
);
alter table evidencia owner to icanh_user;

Create table modificacion(
	no_ticket integer not null,
	captura_solicitud varchar not null,
	fecha_atencion timestamp not null ,
	motivo varchar not null ,
	detalles varchar not null 
);
alter table modificacion owner to icanh_user;

Create table encuesta(
	no_ticket integer not null,
	calificacion_caso integer not null ,
	cerrar_caso boolean not null ,	
	calificacion_tecnico integer not null ,
	fecha_respuesta date
);
alter table encuesta owner to icanh_user;

create table solicitud(
	solicitud_padre integer,
	id_funcionario integer not null ,
	estado varchar not null ,
	id_dependencia integer not null ,
	nivel_criticidad varchar,
	tiempo_respuesta varchar,
	fecha_creacion timestamp not null ,
	fecha_cierre timestamp,
	detalle_solicitud varchar not null ,
	id_subcategoria integer not null 
);
alter table solicitud owner to icanh_user;
--PRIMARY KEYS

ALTER TABLE funcionario ADD COLUMN id_funcionario SERIAL PRIMARY KEY;
ALTER TABLE asignacion ADD COLUMN id_asignacion SERIAL PRIMARY KEY;
ALTER TABLE dependencia ADD COLUMN id_dependencia SERIAL PRIMARY KEY;
ALTER TABLE tipo_solicitud ADD COLUMN id_tipo SERIAL PRIMARY KEY;
ALTER TABLE soporte ADD COLUMN id_soporte SERIAL PRIMARY KEY;
ALTER TABLE subcategoria_soporte ADD COLUMN id_subcategoria SERIAL PRIMARY KEY;
ALTER TABLE modificacion ADD COLUMN id_modificacion SERIAL PRIMARY KEY;
ALTER TABLE evidencia ADD COLUMN id_evidencia SERIAL PRIMARY KEY;
ALTER TABLE encuesta ADD PRIMARY KEY (no_ticket);
ALTER TABLE solicitud ADD COLUMN no_ticket SERIAL PRIMARY KEY;

--FOREIGN KEYS
--ASIGNACION
ALTER TABLE asignacion 
	ADD FOREIGN KEY (id_administrador) REFERENCES funcionario (id_funcionario);
ALTER TABLE asignacion 
	ADD FOREIGN KEY (no_ticket) REFERENCES solicitud (no_ticket);
--DEPENDENCIA
ALTER TABLE dependencia 
	ADD FOREIGN KEY (dependencia_padre) REFERENCES dependencia (id_dependencia);
--SOPORTE
ALTER TABLE soporte 
	ADD FOREIGN KEY (id_tipo) REFERENCES tipo_solicitud (id_tipo);
--SUBCATEGORIA SOPORTE
ALTER TABLE subcategoria_soporte 
	ADD FOREIGN KEY (id_soporte) REFERENCES soporte (id_soporte);
--EVIDENCIA
ALTER TABLE evidencia 
	ADD FOREIGN KEY (no_ticket) REFERENCES solicitud (no_ticket);
--MODIFICACION
ALTER TABLE modificacion 
	ADD FOREIGN KEY (no_ticket) REFERENCES solicitud (no_ticket);
--ENCUESTA
ALTER TABLE encuesta 
	ADD FOREIGN KEY (no_ticket) REFERENCES solicitud (no_ticket);
--SOLICITUD
ALTER TABLE solicitud 
	ADD FOREIGN KEY (solicitud_padre) REFERENCES solicitud (no_ticket);
ALTER TABLE solicitud 
	ADD FOREIGN KEY (id_funcionario) REFERENCES funcionario (id_funcionario);
ALTER TABLE solicitud 
	ADD FOREIGN KEY (id_dependencia) REFERENCES dependencia (id_dependencia);
ALTER TABLE solicitud 
	ADD FOREIGN KEY (id_subcategoria) REFERENCES subcategoria_soporte (id_subcategoria);
