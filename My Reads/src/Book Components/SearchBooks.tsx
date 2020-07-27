import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

type SearchBooksState = {
  input: string;
  books: Array<{
    id: number;
    shelf: string;
    imageLinks: { smallThumbnail: string };
    title: string;
    authors: string;
  }>;
};
interface SearchBooksProps {
  currentShelfBooks: SearchBooksState["books"];
  addBooktoShelf: Function;
}
class SearchBooks extends React.Component<SearchBooksProps, SearchBooksState> {
  state: SearchBooksState = {
    input: "",
    books: [],
  };
  _inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: event.target.value }, () => {
      if (this.state.input.length) {
        BooksAPI.search(this.state.input).then(
          (books: SearchBooksState["books"]) => {
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
          }
        );
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
                  changeShelf={(event: React.ChangeEvent<HTMLInputElement>) =>
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
export default SearchBooks;
