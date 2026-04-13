const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Azure Node App</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #0078D4, #00B4D8);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }

      .card {
        background: rgba(0,0,0,0.25);
        padding: 40px;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        max-width: 500px;
      }

      h1 {
        margin-bottom: 10px;
      }

      p {
        font-size: 18px;
        opacity: 0.9;
      }

      .env {
        margin-top: 20px;
        font-size: 14px;
        background: rgba(255,255,255,0.2);
        padding: 10px;
        border-radius: 8px;
      }

      .footer {
        margin-top: 20px;
        font-size: 12px;
        opacity: 0.8;
      }
    </style>
  </head>

  <body>
    <div class="card">
      <h1>🚀 Hello from Azure!</h1>
      <p>Your Node.js app is running on Azure App Service.</p>

      <div class="env">
        Environment: <strong>${process.env.NODE_ENV || 'development'}</strong>
      </div>

      <div class="footer">
        Powered by Node.js + Express
      </div>
    </div>
  </body>
  </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});