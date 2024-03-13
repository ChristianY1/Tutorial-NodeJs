CREATE OR REPLACE PROCEDURE obtener_empleados_por_departamento(
    departamento_id_in IN NUMBER,
    empleados_out OUT SYS_REFCURSOR
) AS
BEGIN
    OPEN empleados_out FOR
    SELECT e.empleado_id, e.nombre, e.apellido, e.fecha_nacimiento, e.salario, d.nombre_departamento
    FROM empleados e
    INNER JOIN departamentos d ON e.departamento_id = d.departamento_id
    WHERE d.departamento_id = departamento_id_in;
END obtener_empleados_por_departamento;
/
