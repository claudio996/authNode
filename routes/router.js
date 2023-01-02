const express = require('express')
const conexion = require('../database/db');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

router.get('/',(req, res) => {
    conexion.query('SELECT * FROM categories', (error, results) => {
        if (error) {
            return
        } else {
            res.render('index', { results: results })
        }
    })

})

router.get('/create', (req, res) => {
    res.render('create')
})

router.post('/save', categoriesController.save)

router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM categories where id = ? ', [id], (error, results) => {
        if (error) {
            throw error
        } else {
            res.render('edit', { categories: results[0] })
        }
    }
    )
})



module.exports = router