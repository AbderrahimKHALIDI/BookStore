const catalService = require("../services/catalogue.services");

const getBooks = async (req, res) => {
  try {
    const books = await catalService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getBook = async (req, res) => {
  try {
    const book = await catalService.getBookById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteBook = async (req, res) => {
  try {
    await catalService.deleteBookById(req.params.id);
    res.status(200).json("livre bien supprime");
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateBook = async (req, res) => {
  try {
    const book = await catalService.updateBook(req.params.id, req.body);
    res.status(200).json("livre bien modifier ");
  } catch (error) {
    res.status(500).json(error);
  }
};
const addBook = async (req, res) => {
  try {
    const imageUrl = `http://localhost:8899/books/${req.file.filename}`;
    const book = {
      name: req.body.name,
      description: req.body.description,
      isbn: req.body.isbn,
      auteur: req.body.auteur,
      editeur: req.body.editeur,
      date_publication: req.body.date_publication,
      image: imageUrl,
      category: req.body.category,
    };
    await catalService.createBook(book);
    res.status(200).json("livre bien ajoute");
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
const addCategory = async (req, res) => {
  try {
    await catalService.createCategory(req.body);
    res.status(200).json("category bien ajoute");
  } catch (error) {
    res.status(500).json(error);
  }
};
const getCategories = async (req, res) => {
  try {
    const categories = await catalService.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteCategoy = async (req, res) => {
  try {
    await catalService.deleteCategoryById(req.params.id);
    res.status(200).json("category bien supprime");
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  getBooks,
  getBook,
  deleteBook,
  updateBook,
  addBook,
  getCategories,
  addCategory,
  deleteCategoy,
};
