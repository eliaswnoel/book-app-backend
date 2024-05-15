// const express = require('express')
const { Book } = require('../models')

const index = async (req, res, next) => {
    try {
        res.json(await Book.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
}

const create = async (req, res, next) => {
    try {
        res.json(await Book.create(req.body))
    } catch (error) {
        res.status(400).json(error);
    }
}

const destroy = async (req, res, next) => {
    try {
        res.json(await Book.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)

    }
}

const show = async (req, res, next) => {
    try {
        res.json(await Book.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    index,
    create,
    show,
    delete: destroy,
};