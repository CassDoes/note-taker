const router = require('express').Router();
const notes = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs'); 

// Get request to show all notes
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});