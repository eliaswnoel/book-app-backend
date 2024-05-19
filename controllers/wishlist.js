// const express = require('express')
const { Wishlist } = require('../models')

const index = async (req, res, next) => {
    try {
        res.json(await Wishlist.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
}

const create = async (req, res, next) => {
    try {
        res.json(await Wishlist.create(req.body))
    } catch (error) {
        res.status(400).json(error);
    }
}

const show = async (req, res, next) => {
    try {
        res.json(await Wishlist.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
}

const destroy = async (req, res, next) => {
    try {
        res.json(await Wishlist.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)

    }
}

const update = async (req, res, next) => {
    try {
        res.json(await Wishlist.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
};




module.exports = {
    index,
    create,
    show,
    delete: destroy,
    update,
};