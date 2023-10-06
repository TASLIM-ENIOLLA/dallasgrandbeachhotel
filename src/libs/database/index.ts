const mysql = require("mysql2/promise");

export default await mysql.createConnection({
  host: "203.161.63.145",
  user: "dallasgrandbeach_admin",
  password: "$DallasGrand2023",
  database: "dallasgrandbeach_dallas_hotel"
});
