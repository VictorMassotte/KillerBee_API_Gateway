const router = require('express').Router();
const axios = require('axios');
const handlerProcess = require('../utils/handler.process');

// GET /api/v1/process/
router.get('/', (req, res) => {
    axios.get(`${handlerProcess()}`).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Error. Internal server error' });
        res.status(404).json({ message: 'Error. Not found' });
        res.status(400).json({ message: 'Error. Bad request' });
    });
});

// GET /api/v1/process/:id
router.get('/:id', (req, res) => {
    axios.get(`${handlerProcess()}` + req.params.id).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Error. Internal server error' });
        res.status(404).json({ message: 'Error. Not found' });
        res.status(400).json({ message: 'Error. Bad request' });
    });
});

// POST /api/v1/process/
router.post('/', function(req, res, ) {
    axios.post(`${handlerProcess()}`, req.body).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Error. Internal server error' });
        res.status(404).json({ message: 'Error. Not found' });
        res.status(400).json({ message: 'Error. Bad request' });
    });
});

// PUT /api/v1/process/:id
router.put('/:id', function(req, res, ) {
    axios.put(`${handlerProcess()}` + req.params.id, req.body).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Error. Internal server error' });
        res.status(404).json({ message: 'Error. Not found' });
        res.status(400).json({ message: 'Error. Bad request' });
    });
});

// DELETE /api/v1/process/:id
router.delete('/:id', function(req, res, ) {
    axios.delete(`${handlerProcess()}` + req.params.id).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Error. Internal server error' });
        res.status(404).json({ message: 'Error. Not found' });
        res.status(400).json({ message: 'Error. Bad request' });
    });
});

module.exports = router;