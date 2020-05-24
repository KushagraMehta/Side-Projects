import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";

class SearchBooks extends Component {
  state = {
    input: "",
    books: [],
  };
  _inputChangeHandler = (event) => {
    this.setState({ input: event.target.value }, () => {
      if (this.state.input.length) {
        BooksAPI.search(this.state.input).then((books) => {
          if (Array.isArray(books)) {
            books.forEach((book) => {
              const sameBookAsOnShelf = this.props.currentShelfBooks.filter(
                (curentbook) => book.id === curentbook.id
              );
              if (sameBookAsOnShelf.length)
                book.shelf = sameBookAsOnShelf[0].shelf;
              else book.shelf = "none";
            });
            this.setState({ books: books });
          } else this.setState({ books: [] });
        });
      } else this.setState({ books: [] });
    });
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={this._inputChangeHandler}
              value={this.state.input}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <li key={book.id}>
                <Book
                  bookImg={book.imageLinks}
                  bookTitle={book.title}
                  bookAuthor={book.authors}
                  currentShelf={book.shelf}
                  changeShelf={(event) =>
                    this.props.addBooktoShelf(event.target.value, book)
                  }
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
SearchBooks.prototype = {
  currentShelf: PropTypes.array,
  addBooktoShelf: PropTypes.func,
};
export default SearchBooks;
