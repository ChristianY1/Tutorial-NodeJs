CREATE TABLE departamentos (
    departamento_id NUMBER PRIMARY KEY,
    nombre_departamento VARCHAR2(100)
);

CREATE TABLE puestos (
    puesto_id NUMBER PRIMARY KEY,
    nombre_puesto VARCHAR2(100)
);

CREATE TABLE empleados (
    empleado_id NUMBER PRIMARY KEY,
    nombre VARCHAR2(100),
    apellido VARCHAR2(100),
    fecha_nacimiento DATE,
    salario NUMBER(10, 2),
    departamento_id NUMBER,
    CONSTRAINT fk_departamento_id FOREIGN KEY (departamento_id) REFERENCES departamentos(departamento_id)
);

CREATE TABLE empleados_puestos (
    empleado_id NUMBER,
    puesto_id NUMBER,
    fecha_inicio DATE,
    fecha_fin DATE,
    CONSTRAINT fk_empleado_id FOREIGN KEY (empleado_id) REFERENCES empleados(empleado_id),
    CONSTRAINT fk_puesto_id FOREIGN KEY (puesto_id) REFERENCES puestos(puesto_id)
);

CREATE TABLE historial_laboral (
    historial_id NUMBER PRIMARY KEY,
    empleado_id NUMBER,
    puesto_id NUMBER,
    fecha_inicio DATE,
    fecha_fin DATE,
    CONSTRAINT fk_historial_empleado_id FOREIGN KEY (empleado_id) REFERENCES empleados(empleado_id),
    CONSTRAINT fk_historial_puesto_id FOREIGN KEY (puesto_id) REFERENCES puestos(puesto_id)
);
