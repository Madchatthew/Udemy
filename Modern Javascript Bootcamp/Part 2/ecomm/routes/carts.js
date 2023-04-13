const express = require('express');
const cartsRepo = require('../repositories/carts');

const router = express.Router();

// Receive a post request to add an item to a cart
router.post('/cart/products', async (req, res) => {
    // Figure out the cart
    let cart
    if (!req.session.cartId) {
        // We don't have a cart, we need to create one
        // and store the cart id on the req.session.cartID
        // property
        cart = await cartsRepo.create({ items: [] });
        req.session.cartId = cart.id;
    } else {
        // We have a cart! Lets get it from the repository
        cart = await cartsRepo.getOne(req.session.cartId);
    }
    // Either increment quantity for existing product
    // OR add new product to items array
    const existingItem = cart.items.find(item => item.id === req.body.productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.items.push({ id: req.body.productId, quantity: 1 });
    }
    await cartsRepo.update(cart.id, { items: cart.items });

    res.send('Product added to cart');
});

// Receive a GET request to show all items in cart

// Receive a post request to delete an item from a cart

module.exports = router;