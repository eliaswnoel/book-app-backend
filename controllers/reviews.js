const express = require('express');
const router = express.Router(); 
const { Review } = require('../models')

const index = async (req, res, next) => {
    try {
        res.json(await Review.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
}

const create = async (req, res, next) => {
    try {
        res.json(await Review.create(req.body))
    } catch (error) {
        res.status(400).json(error);
    }
}

const destroy = async (req, res, next) => {
    try {
        res.json(await Review.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)

    }
}

const show = async (req, res, next) => {
    try {
        res.json(await Review.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res, next) => {
    try {
        res.json(await Review.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
}

//For review id
router.get('/:id', async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.json(review);
    } catch (error) {
        console.error('Error fetching review:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});



module.exports = {
    index,
    create,
    show,
    delete: destroy,
    update
};