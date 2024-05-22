// const express = require('express')
const { Favorite, Book } = require('../models')

const index = async (req, res, next) => {
    try {
        const favorites = (await Favorite.find({}));
        console.log('test')
        const bookIds = [] 
        favorites.forEach((favorite) => {bookIds.push(favorite.bookId)})
        const books = await Book.find({_id: {$in: bookIds}})
        console.log(books)
        console.log('test')
        res.json(books)
    } catch (error) {
        res.status(400).json(error)
    }
}

const create = async (req, res, next) => {
    console.log(req)
    try {
        res.json(await Favorite.create(req.body))
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}

const destroy = async (req, res, next) => {
    try {
        res.json(await Favorite.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)

    }
}

const show = async (req, res, next) => {
    try {
        const favorites = (await Favorite.findById(req.params.id));
        const bookIds = favorites.map(({bookId}) => id)
        console.log(bookIds)
        console.log('test')
        res.json(await Favorite.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res, next) => {
    try {
        res.json(await Favorite.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
}



module.exports = {
    index,
    create,
    show,
    delete: destroy,
    update
};