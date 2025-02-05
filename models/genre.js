const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
    unique: true,
  },
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

GenreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});

GenreSchema.virtual("book_list", {
  ref: "Book",
  localField: "_id",
  foreignField: "genre",
});

module.exports = mongoose.model("Genre", GenreSchema);
