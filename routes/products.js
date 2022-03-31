const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

let jsonFile = fs.readFileSync('data/produits.json');
let data = JSON.parse(jsonFile);

router.get('/', function (req, res) {
    res.status(200).json(data);
});

router.get('/:id', function (req, res) {
    let found = data.find(function (product) {
        return product.id === req.params.id;
    });
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

router.post('/', function (req, res) {
    let newId = uuidv4();

    let newProduct = {
        id: newId,
        name: req.body.name,
        description: req.body.description,
        token: req.body.token,
        price: req.body.price,
        stock: req.body.stock,
        reference: req.body.reference,
        createdAt: new Date(),
        updateAt: null
    };

    data.push(newProduct);
    res.status(201).json(newProduct);
});

router.put('/:id', function (req, res) {
    let found = data.find(function (product) {
        return product.id === req.params.id;
    });

    const updateNow = new Date();

    if (found) {
        let updated = {
            id: found.id,
            name: req.body.name,
            description: req.body.description,
            token: req.body.token,
            price: req.body.price,
            stock: req.body.stock,
            reference: req.body.reference,
            createdAt: found.createdAt,
            updateAt: updateNow
        };

        let targetIndex = data.indexOf(found);

        data.splice(targetIndex, 1, updated);

        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

router.delete('/:id', function (req, res) {
    let found = data.find(function (product) {
        return product.id === req.params.id;
    });

    if (found) {
        let targetIndex = data.indexOf(found);

        data.splice(targetIndex, 1);
    }

    res.sendStatus(204);
});


module.exports = router;