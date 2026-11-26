const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "NADIM AI Backend is running!"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("NADIM AI Server Started");
});
