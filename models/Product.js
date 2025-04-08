const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    discount: { type: Number, required: true },
    offerPrice: { type: Number, required: true },
    reviews: { type: [String], default: [] }
});

module.exports = mongoose.model('Product', productSchema);