const express = require('express');
const workoutRouter = express.Router();

workoutRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the workouts to you');
})
.post((req, res) => {
    res.end(`Will add the workout: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /workouts');
})
.delete((req, res) => {
    res.end('Deleting all workouts');
});

workoutRouter.route('/:workoutId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send you information about the workout ${req.params.workoutId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /workouts/:workoutId');
})
.put((req, res) => {
    res.end(`Updating workout with the name: ${req.body.name} and description: ${req.body.description} as the workout ${req.params.workoutId}`);
})
.delete((req, res) => {
    res.end(`Deleting workout with the id ${req.params.workoutId}`);
});

module.exports = workoutRouter;