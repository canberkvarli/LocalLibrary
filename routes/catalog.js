const express = require("express");
const router = express.Router();

// Require controller modules.
const books_controller = require("../controllers/booksController");
const authors_controller = require("../controllers/authorsController");
const genres_controller = require("../controllers/genresController");
const book_instances_controller = require("../controllers/bookinstancesController");

/// BOOK ROUTES ///

// GET catalog home page.
router.get("/", books_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/book/create", books_controller.book_create_get);

// POST request for creating Book.
router.post("/book/create", books_controller.book_create_post);

// GET request to delete Book.
router.get("/book/:id/delete", books_controller.book_delete_get);

// POST request to delete Book.
router.post("/book/:id/delete", books_controller.book_delete_post);

// GET request to update Book.
router.get("/book/:id/update", books_controller.book_update_get);

// POST request to update Book.
router.post("/book/:id/update", books_controller.book_update_post);

// GET request for one Book.
router.get("/book/:id", books_controller.book_detail);

// GET request for list of all Book items.
router.get("/books", books_controller.book_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get("/author/create", authors_controller.author_create_get);

// POST request for creating Author.
router.post("/author/create", authors_controller.author_create_post);

// GET request to delete Author.
router.get("/author/:id/delete", authors_controller.author_delete_get);

// POST request to delete Author.
router.post("/author/:id/delete", authors_controller.author_delete_post);

// GET request to update Author.
router.get("/author/:id/update", authors_controller.author_update_get);

// POST request to update Author.
router.post("/author/:id/update", authors_controller.author_update_post);

// GET request for one Author.
router.get("/author/:id", authors_controller.author_detail);

// GET request for list of all Authors.
router.get("/authors", authors_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genres_controller.genre_create_get);

//POST request for creating Genre.
router.post("/genre/create", genres_controller.genre_create_post);

// GET request to delete Genre.
router.get("/genre/:id/delete", genres_controller.genre_delete_get);

// POST request to delete Genre.
router.post("/genre/:id/delete", genres_controller.genre_delete_post);

// GET request to update Genre.
router.get("/genre/:id/update", genres_controller.genre_update_get);

// POST request to update Genre.
router.post("/genre/:id/update", genres_controller.genre_update_post);

// GET request for one Genre.
router.get("/genre/:id", genres_controller.genre_detail);

// GET request for list of all Genre.
router.get("/genres", genres_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get(
  "/bookinstance/create",
  book_instances_controller.bookinstance_create_get
);

// POST request for creating BookInstance.
router.post(
  "/bookinstance/create",
  book_instances_controller.bookinstance_create_post
);

// GET request to delete BookInstance.
router.get(
  "/bookinstance/:id/delete",
  book_instances_controller.bookinstance_delete_get
);

// POST request to delete BookInstance.
router.post(
  "/bookinstance/:id/delete",
  book_instances_controller.bookinstance_delete_post
);

// GET request to update BookInstance.
router.get(
  "/bookinstance/:id/update",
  book_instances_controller.bookinstance_update_get
);

// POST request to update BookInstance.
router.post(
  "/bookinstance/:id/update",
  book_instances_controller.bookinstance_update_post
);

// GET request for one BookInstance.
router.get("/bookinstance/:id", book_instances_controller.bookinstance_detail);

// GET request for list of all BookInstance.
router.get("/bookinstances", book_instances_controller.bookinstance_list);

module.exports = router;
