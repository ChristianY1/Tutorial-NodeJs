const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function fun() {
  let cont;
  try {
    con = await oracledb.getConnection({
      user: "ora_db",
      password: "admin",
      connectionString: "172.17.0.2/XE",
    });
    const data = await con.execute("SELECT * FROM EMPLEADOS");
    console.log(data.rows);
  } catch (error) {
    console.log(error);
  }
}

fun();
