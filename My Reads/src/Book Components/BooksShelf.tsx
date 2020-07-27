import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BooksShelf: React.FC<{
  shelfName: string;
  books: Array<{
    id: number;
    shelf: string;
    imageLinks: { smallThumbnail: string };
    title: string;
    authors: string;
  }>;
  shelfChangeHandler: Function;
  shelfValue: string;
}> = (props) => {
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
                changeShelf={(event: React.ChangeEvent<HTMLInputElement>) =>
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
