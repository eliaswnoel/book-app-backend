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
        es.status(400).json(error);
    }
}

const show = async (req, res, next) => {
    try {
        res.json(await Wishlist.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    index,
    create,
    show
};