   const mysql = require("mysql");
    module.exports = () =>{
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'oz-tools'
        });
    };

   /*
               connection.connect(function (err) {
                   if (err) {
                       throw err;
                   } else {
                       console.log("Conexion exitosa");
                   }
               });

               connection.query("SELECT fecha FROM usuarios WHERE  id=1", function (error, filas) {
                   if (error) {
                       throw error;

                   } else {
                       filas.forEach(fila => {
                           console.log(fila);
                       });
                   }
               });*/


           // connection.end();
       // }


    //});

//});