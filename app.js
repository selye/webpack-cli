const express = require('express');
const app = express();
const port = 3000;

const Rpage = `
  <html>
    <head>page title</head>
    <body>
      <p>服务端渲染内容</p>
    </body>
  </html>
  `;

app.get('/', (req, res) => {
  res.send(Rpage);
});

app.listen(port, () => {
  console.log(`Example app listing on port ${port}`);
});
