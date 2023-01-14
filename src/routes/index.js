const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./partials/home');
});

router.get('/servicios', (req, res) => {
    res.render('./partials/servicios');
});

router.get('/servicios/diseno', (req, res) => {
    res.render('./services/diseno');
});

router.get('/servicios/desarrollo', (req, res) => {
    res.render('./services/desarrollo');
});

router.get('/servicios/marketing', (req, res) => {
    res.render('./services/marketing');
});

router.get('/servicios/edicion', (req, res) => {
    res.render('./services/edicion');
});

router.get('/servicios/blockchain', (req, res) => {
    res.render('./services/blockchain');
});

router.get('/contacto', (req, res) => {
    res.render('./partials/contacto');
});

module.exports = router;