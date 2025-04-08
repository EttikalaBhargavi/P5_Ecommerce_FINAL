const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://BhargaviP5:UZWk6AS6vZv4QzZs@p5ecommerce.pcf0oqq.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Import Models
const Product = require('./models/Product');
const User = require('./models/User');
console.log(User);


// POST API to add a product
app.post('/api/products', async (req, res) => {
    const product = new Product(req.body);
    try {
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// GET API to retrieve all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Signup API
app.post('/api/signup', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Login API
app.post('/api/login', async (req, res) => {
    const { rollNo, password } = req.body;
    try {
        const user = await User.findOne({ rollNo, password });
        if (!user) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});