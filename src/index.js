require('dotenv').config();
const express = require('express');
const { initDb } = require('./db');
const customersRoutes = require('./routes/customers');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use('/customers', customersRoutes);

app.get('/', (req, res) => {
  res.json({ service: 'invoice-customers-service', version: '1.0.0', status: 'running' });
});

const start = async () => {
  let retries = 10;
  while (retries > 0) {
    try {
      await initDb();
      break;
    } catch (err) {
      console.log(`DB not ready, retrying... (${retries} left)`);
      retries--;
      await new Promise(r => setTimeout(r, 3000));
    }
  }

  app.listen(PORT, () => {
    console.log(`Customers service running on port ${PORT}`);
  });
};

start();
