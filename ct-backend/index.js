const express = require("express");
const app = express();
const port = 4400;

app.get("/", (req, res) => {
  res.json({
    name: "contribution tracker plugin",
    stack: "VueJs, Tailwind & NodeJs",
    teaam_lead: "@Phosah",
  });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
