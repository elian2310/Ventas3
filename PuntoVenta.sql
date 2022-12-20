
CREATE DATABASE `dbventas`; 

/* Creo el usuario para esta prueba publica */
/* CREATE USER 'user' IDENTIFIED BY 'userpass'; */

/* Le concedo permisos para conectarse */
/*  GRANT USAGE ON *.* TO 'user'@localhost IDENTIFIED BY 'userpass'; */
/* GRANT USAGE ON *.* TO 'testwebserveruser'@'%' IDENTIFIED BY 'testwebserverpass'; // Esto se usar en caso de que se requiera acceder fuera del localhost */

/* Se le da acceso al usuario a la Base de Datos */
/* GRANT ALL privileges ON `PuntoVenta`.* TO 'user'@localhost; */

/* Aplico los cambios */
/* FLUSH PRIVILEGES; */

/* Selecciono la Base de Datos */
USE dbventas;

create table Cliente(NitCliente varchar(10) primary key,
RazonSocial varchar(50) not null,
Direccion varchar(50) not null,
Telefono varchar(10) not null);

create table Factura(NumFactura int auto_increment primary key,
CUF varchar(50) not null,
CodigoControl varchar(15) not null unique,
MontoTotal numeric not null,
CodigoQR varchar(10) not null,
NitCliente varchar(10) not null,
foreign key(NitCliente)references Cliente(NitCliente));

create table Categoria(CodigoCat int auto_increment primary key,
Nombre varchar(25) not null);

create table Marca(CodigoMarca int auto_increment primary key,
Nombre varchar(25) not null);

create table DetalleMarca(CodigoDetalleMarca int auto_increment primary key,
CodigoCat int not null,
CodigoMarca int not null,
foreign key(CodigoCat)references Categoria(CodigoCat),
foreign key(CodigoMarca)references Marca(CodigoMarca));

create table Producto(CodigoQR varchar(15) primary key,
NombreProducto varchar(50) not null,
Descripcion varchar(150),
Precio float not null,
Cantidad int not null,
CantidadMinima int not null,
PathImagen varchar(150),
CodigoDetalleMarca int not null,
foreign key(CodigoDetalleMarca)references DetalleMarca(CodigoDetalleMarca));

create table DetalleFacturacion(CodigoQR varchar(15) not null,
NumFactura int not null,
Cantidad int not null,
primary key(CodigoQR, NumFactura),
foreign key(CodigoQR)references Producto(CodigoQR),
foreign key(NumFactura)references Factura(NumFactura));




insert into Cliente(NitCliente, RazonSocial, Direccion, Telefono)
values('123456789', 'Nicolas Panozo', 'Direccion Desconocida', '8964723');

insert into Cliente(NitCliente, RazonSocial, Direccion, Telefono)
values('987654321', 'Roberto Vargas', 'Direccion Desconocida', '7566145');

insert into Cliente(NitCliente, RazonSocial, Direccion, Telefono)
values('456789321', 'Gabriela Cuella', 'Direccion Desconocida', '8974132');




insert into Categoria(Nombre)
values('Limpieza');

insert into Categoria(Nombre)
values('Cuidado Personal');

insert into Categoria(Nombre)
values('Aliemnto');



insert into Marca(Nombre)
values('Colgate');

insert into Marca(Nombre)
values('Cocacola');

insert into Marca(Nombre)
values('Ola');





insert into DetalleMarca(CodigoCat, CodigoMarca)
values(1,1);

insert into DetalleMarca(CodigoCat, CodigoMarca)
values(1,3);

insert into DetalleMarca(CodigoCat, CodigoMarca)
values(2,1);

insert into DetalleMarca(CodigoCat, CodigoMarca)
values(2,2);




insert into Producto(CodigoQR, NombreProducto, Descripcion, Precio, Cantidad, CantidadMinima, PathImagen, CodigoDetalleMarca)
values('68465218694', 'Nombre random','Producto interesante', 150, 100, 10, 'C:\\Alejandro\\Pro_IngSoftware\\ConexionSQL\\IMG\\1.jpg', 2);