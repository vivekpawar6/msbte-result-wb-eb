const express = require("express");
const app = express();

app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
