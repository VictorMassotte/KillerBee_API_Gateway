const router = require('express').Router();
const axios = require('axios');
const handlerIngredients = require('../utils/handler.ingredients');
const { checkTokenMiddleware } = require('../middleware/auth');

// GET /api/v1/ingredients/
router.get('/', checkTokenMiddleware, (req, res) => {
    axios.get(`${handlerIngredients()}`).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Error. Internal server error' });
        res.status(404).json({ message: 'Error. Not found' });
        res.status(400).json({ message: 'Error. Bad request' });
    });
});

// GET /api/v1/ingredients/:id
router.get('/:id', checkTokenMiddleware, (req, res) => {
    axios.get(`${handlerIngredients()}` + req.params.id).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Error. Internal server error' });
        res.status(404).json({ message: 'Error. Not found' });
        res.status(400).json({ message: 'Error. Bad request' });
    });
});

// POST /api/v1/ingredients/
router.post('/',checkTokenMiddleware, function(req, res, ) {
    axios.post(`${handlerIngredients()}`, req.body).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Error. Internal server error' });
        res.status(404).json({ message: 'Error. Not found' });
        res.status(400).json({ message: 'Error. Bad request' });
    });
});

// PUT /api/v1/ingredients/:id
router.put('/:id', checkTokenMiddleware, function(req, res, ) {
    axios.put(`${handlerIngredients()}` + req.params.id, req.body).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Error. Internal server error' });
        res.status(404).json({ message: 'Error. Not found' });
        res.status(400).json({ message: 'Error. Bad request' });
    });
});

// DELETE /api/v1/ingredients/:id
router.delete('/:id', checkTokenMiddleware, function(req, res, ) {
    axios.delete(`${handlerIngredients()}` + req.params.id).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Error. Internal server error' });
        res.status(404).json({ message: 'Error. Not found' });
        res.status(400).json({ message: 'Error. Bad request' });
    });
});

module.exports = router;