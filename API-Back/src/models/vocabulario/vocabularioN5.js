const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vocabularioN5Schema = new Schema({
    id: { type: String },
    Vocabulary: { type: String },
    Strokes: { type: String },
    "JLPT-test": { type: String },
    "Word-Type": { type: String },
    "Verb-Type": { type: String },
    "Verb-Ending": { type: String },
    Reading: { type: String },
    Pronunciation: { type: String },
    Translation: { type: String },
});

module.exports = mongoose.model("VocabularioN5", vocabularioN5Schema);