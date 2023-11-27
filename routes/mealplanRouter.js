const express = require('express');
const mealplanRouter = express.Router();

mealplanRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send your mealplan');
})
.post((req, res) => {
    res.end(`Will add the mealplan: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /mealplan');
})
.delete((req, res) => {
    res.end('Deleting your mealplan');
});


module.exports = mealplanRouter;