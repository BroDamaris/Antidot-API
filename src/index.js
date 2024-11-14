const express = require("express");
const middlewareLogRequest = require("./middleware/logs");

const app = express();
const PORT = 3000;

app.use(middlewareLogRequest);

app.listen(PORT, () => {
  console.log(`Server berhasil berjalan di port ${PORT}`);
});
