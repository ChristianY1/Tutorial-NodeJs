--Departamentos
INSERT INTO departamentos (departamento_id, nombre_departamento) VALUES (1, 'Ventas');
INSERT INTO departamentos (departamento_id, nombre_departamento) VALUES (2, 'Marketing');
INSERT INTO departamentos (departamento_id, nombre_departamento) VALUES (3, 'Recursos Humanos');

--Puestos
INSERT INTO puestos (puesto_id, nombre_puesto) VALUES (1, 'Gerente');
INSERT INTO puestos (puesto_id, nombre_puesto) VALUES (2, 'Asistente de ventas');
INSERT INTO puestos (puesto_id, nombre_puesto) VALUES (3, 'Especialista en marketing');


--Empleados
INSERT INTO empleados (empleado_id, nombre, apellido, fecha_nacimiento, salario, departamento_id) VALUES (1, 'Juan', 'González', TO_DATE('1990-05-15', 'YYYY-MM-DD'), 50000, 1);
INSERT INTO empleados (empleado_id, nombre, apellido, fecha_nacimiento, salario, departamento_id) VALUES (2, 'María', 'López', TO_DATE('1985-08-22', 'YYYY-MM-DD'), 45000, 2);
INSERT INTO empleados (empleado_id, nombre, apellido, fecha_nacimiento, salario, departamento_id) VALUES (3, 'Carlos', 'Martínez', TO_DATE('1993-02-10', 'YYYY-MM-DD'), 40000, 3);


--Empleados Puestos
INSERT INTO empleados_puestos (empleado_id, puesto_id, fecha_inicio, fecha_fin) VALUES (1, 1, TO_DATE('2020-01-01', 'YYYY-MM-DD'), NULL);
INSERT INTO empleados_puestos (empleado_id, puesto_id, fecha_inicio, fecha_fin) VALUES (2, 2, TO_DATE('2019-06-15', 'YYYY-MM-DD'), NULL);
INSERT INTO empleados_puestos (empleado_id, puesto_id, fecha_inicio, fecha_fin) VALUES (3, 3, TO_DATE('2021-03-01', 'YYYY-MM-DD'), NULL);


--Historial Laboral
INSERT INTO historial_laboral (historial_id, empleado_id, puesto_id, fecha_inicio, fecha_fin) VALUES (1, 1, 2, TO_DATE('2015-01-01', 'YYYY-MM-DD'), TO_DATE('2019-12-31', 'YYYY-MM-DD'));
INSERT INTO historial_laboral (historial_id, empleado_id, puesto_id, fecha_inicio, fecha_fin) VALUES (2, 2, 3, TO_DATE('2010-03-15', 'YYYY-MM-DD'), TO_DATE('2019-06-14', 'YYYY-MM-DD'));
INSERT INTO historial_laboral (historial_id, empleado_id, puesto_id, fecha_inicio, fecha_fin) VALUES (3, 3, 1, TO_DATE('2018-05-01', 'YYYY-MM-DD'), TO_DATE('2021-02-28', 'YYYY-MM-DD'));

