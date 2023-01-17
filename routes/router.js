const express = require('express')
const conexion = require('../database/db');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');


router.get('/', (req, res) => {
    res.render('login');

})

router.get('/register', (req, res) => {
    res.render('registro');

})


router.get('/logout', (req, res) => {
    res.render('logout');

})


router.get('/index', (req, res) => {
    res.render('index');

})
router.get('/categories', (req, res) => {
    conexion.query('SELECT * FROM categories', (error, results) => {
        if (error) {
            return
        } else {
            res.render('categories/categories', { results: results })
        }
    })

})

router.get('/registrar', (req, res) => {
    conexion.query('SELECT * FROM roles', (error, results) => {
        if (error) {
            return error
        }else{
            res.render('registro', {roles: results})
        }
    })
})


router.get('/create', (req, res) => {
    res.render('categories/categoriesCreate')
})


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

router.post('/save', categoriesController.save);
router.post('/update', categoriesController.update);

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE from categories where id = ? ', [id], (error, results) => {
        if (!error) {
            res.redirect('/')
        } else {
            throw error;
        }
    })
})
module.exports = router