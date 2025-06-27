const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.post("/submit", (req, res) => {
  console.log("Получены данные:", req.body);
  res.send("Принято: " + JSON.stringify(req.body));
});

app.get("/sse", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  let count = 0;
  const interval = setInterval(() => {
    res.write(`data: SSE обновление ${++count}\n\n`);
  }, 3000);
  req.on("close", () => clearInterval(interval));
});

const server = app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

// WebSocket
const WebSocket = require("ws");
const wss = new WebSocket.Server({ server });

wss.on("connection", ws => {
  let count = 0;
  const interval = setInterval(() => {
    ws.send("WebSocket обновление " + ++count);
  }, 4000);
  ws.on("close", () => clearInterval(interval));
});
