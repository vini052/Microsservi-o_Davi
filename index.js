const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const paymentRoutes = require('./routes/payment-routes');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
