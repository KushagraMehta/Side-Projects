import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BooksShelf = (props) => {
  const { shelfName, books, shelfChangeHandler, shelfValue } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book
                bookImg={book.imageLinks}
                bookTitle={book.title}
                bookAuthor={book.authors}
                currentShelf={shelfValue}
                changeShelf={(event) =>
                  shelfChangeHandler(event.target.value, book)
                }
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
BooksShelf.prototype = {
  shelfName: PropTypes.string,
  books: PropTypes.array,
  shelfChangeHandler: PropTypes.func,
};
export default BooksShelf;
