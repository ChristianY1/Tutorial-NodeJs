DECLARE
  v_departamento_id NUMBER := 123; -- Asigna aquí el ID del departamento deseado
  v_cursor SYS_REFCURSOR;
  v_empleado_id empleados.empleado_id%TYPE;
  v_nombre empleados.nombre%TYPE;
  v_apellido empleados.apellido%TYPE;
  v_fecha_nacimiento empleados.fecha_nacimiento%TYPE;
  v_salario empleados.salario%TYPE;
  v_nombre_departamento departamentos.nombre_departamento%TYPE;
BEGIN
  EMPLEADOS_CRUD.obtener_empleados_por_departamento(v_departamento_id, v_cursor);
  
  LOOP
    FETCH v_cursor INTO v_empleado_id, v_nombre, v_apellido, v_fecha_nacimiento, v_salario, v_nombre_departamento;
    EXIT WHEN v_cursor%NOTFOUND;
    -- Hacer algo con los datos recuperados, como imprimirlos
    DBMS_OUTPUT.PUT_LINE('ID: ' || v_empleado_id || ', Nombre: ' || v_nombre || ', Apellido: ' || v_apellido || ', Fecha de Nacimiento: ' || v_fecha_nacimiento || ', Salario: ' || v_salario || ', Departamento: ' || v_nombre_departamento);
  END LOOP;
  
  CLOSE v_cursor;
END;
