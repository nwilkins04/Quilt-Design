const mysql = requre("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "root",
    database: "quilt_db"
});

connection.connect(function(err) {
    if (err) throw err;
})