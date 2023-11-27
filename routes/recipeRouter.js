const express = require('express');
const recipeRouter = express.Router();

recipeRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the recipes to you');
})
.post((req, res) => {
    res.end(`Will add the recipe: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /recipes');
})
.delete((req, res) => {
    res.end('Deleting all recipes');
});

recipeRouter.route('/:recipeId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send you information about the recipe ${req.params.recipeId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /recipes/:recipeId');
})
.put((req, res) => {
    res.end(`Updating recipe with the name: ${req.body.name} and description: ${req.body.description} as the recipe ${req.params.recipeId}`);
})
.delete((req, res) => {
    res.end(`Deleting recipe with the id ${req.params.recipeId}`);
});

module.exports = recipeRouter;