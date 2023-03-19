const express = require("express");
const cors = require("cors");

const app = express();

app.use("body-parser");
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/pets", async (req, res) => {
  res.json(pets);
});

app.listen(PORT, () => `App listening on port ${PORT}`);
