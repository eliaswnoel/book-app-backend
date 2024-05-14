// const express = require('express');
const { List } = require('../models')

const list = {
    addToWishlist: async (req, res) => {
        try {
            const {bookId} = req.body;
            const list = new List({ type: 'Wishlist', book: bookId });
            await list.save();
            res.status(201).json({message: "Book Added!"});
        } catch(error) {
            console.error('Error adding book to log:', error);
            res.status(500).json({ error: 'Failed to add book to wishlist' });
        }
    },

    addToLog: async (req, res) => {
        try {
            const {bookId} = req.body;
            const list = new List({ type: 'Log', book: bookId });
            await list.save();
            res.status(201).json({ message: 'Book added to log successfully' });
        } catch (error) {
            console.error('Error adding book to log:', error)
            res.status(500).json({ error: 'Failed to add book to wishlist' });
        }
    },

    getList: async (req, res) => {
    //getWishlist: async (req, res) => {
         const listType = req.query.type || 'Log';
         console.log("--------", listType)
        try {
            const list = await List.find({}); //type: listType });//.populate('book');
            res.json(list);
        } catch (error) {
            console.error('Error getting wishlist:', error);
            res.status(500).json({ error: `Failed to get list type = ${listType}` });
        }
    },
    getWishlist: async (req, res) => {
             const type = req.params.type || 'log';
            try {
                const list = await List.find({ type: type }).populate('book');
                res.json(list);
            } catch (error) {
                console.error('Error getting wishlist:', error);
                res.status(500).json({ error: 'Failed to get wishlist' });
            }
        },

    // Get log
    getLog: async (req, res) => {
        try {
            const log = await List.find({ type: 'Log' }).populate('book');
            res.json(log);
        } catch (error) {
            console.error('Error getting log:', error);
            res.status(500).json({ error: 'Failed to getlog' });
        }
    }
};

module.exports = list;

