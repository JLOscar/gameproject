import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.json({ foo: "bar" });
});

app.listen(port, () => {
  console.log(`Server running on prot http://localhost:${port}`);
});
