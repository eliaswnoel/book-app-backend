// const express = require('express');
// const { List, Book } = require('../models')


// const list = {
//     addToList: async (req, res) => {
//         try {
//             const listType = req.body.type || 'Log';
//             console.log("listType: ", listType);
//             const {bookId} = req.body;
//             const book = await Book.create(req.body)
//             console.log("here")
//             console.log(req.body)
//             const list = new List({ type: listType , book: book.id });
//             await list.save();
//             res.status(201).json({message: "Book Added!"});
//         } catch(error) {
//             console.error('Error adding book to log:', error);
//             res.status(500).json({ error: 'Failed to add book to wishlist' });
//         }
//     },


//     getList: async (req, res) => {
//          const listType = req.query.type || 'Log';
//          console.log("--------", listType)
//         try {
//             const list = await List.find({}); //type: listType });//.populate('book');
//             res.json(list);
//         } catch (error) {
//             console.error('Error getting wishlist:', error);
//             res.status(500).json({ error: `Failed to get list type = ${listType}` });
//         }
//     },
// };

// module.exports = list;

