const { Favorite } = require('../models');
const { Book } = require('../models'); 
const { User } = require('../models'); 

// Add a book to favorites
const addFavorite = async (req, res, next) => {
    const { userId, bookId } = req.body;

    try {
        // Check if the favorite already exists
        const existingFavorite = await Favorite.findOne({ userId, bookId });
        if (existingFavorite) {
            return res.status(400).json({ message: 'Book is already in favorites' });
        }

        // Create a new favorite entry
        const favorite = new Favorite({ userId, bookId });
        await favorite.save();
        res.status(201).json(favorite);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Remove a book from favorites
const removeFavorite = async (req, res, next) => {
    const { userId, bookId } = req.body;

    try {
        // Find and delete the favorite entry
        const favorite = await Favorite.findOneAndDelete({ userId, bookId });
        if (!favorite) {
            return res.status(404).json({ message: 'Favorite not found' });
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get a user's favorite books
const getUserFavorites = async (req, res, next) => {
    const { userId } = req.params;

    try {
        // Find all favorite entries for the user and populate book details
        const favorites = await Favorite.find({ userId }).populate('bookId');
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = {
    addFavorite,
    removeFavorite,
    getUserFavorites
};