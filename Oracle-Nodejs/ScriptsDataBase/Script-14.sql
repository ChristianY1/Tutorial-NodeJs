alter session set "_ORACLE_SCRIPT"=true;
create user ora_db identified by admin;
grant dba to ora_db;
GRANT CREATE TABLE TO ora_db;
GRANT CREATE SEQUENCE TO ora_bd;


CREATE TABLE empleados (
    id NUMBER,
    nombre VARCHAR2(100),
    salario NUMBER(10, 2),
    fecha_contratacion DATE
);

SELECT *
FROM EMPLEADOS;

SELECT table_name 
FROM user_tables;
WHERE USER = sys

alter session set "_ORACLE_SCRIPT"=true;
create user empleados_crud identified by admin;
grant dba to empleados_crud;
GRANT CREATE TABLE TO empleados_crud;
GRANT CREATE SEQUENCE TO empleados_crud;



