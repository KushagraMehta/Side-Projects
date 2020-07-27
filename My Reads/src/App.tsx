import React from "react";
import BooksShelf from "./Book Components/BooksShelf";
import SearchBooks from "./Book Components/SearchBooks";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

type book = {
  id: number;
  shelf: string;
  imageLinks: { smallThumbnail: string };
  title: string;
  authors: string;
};
interface BooksAppState {
  shelfs_id: Array<{
    id: number;
    name: string;
    value: string;
  }>;
  books: book[];
}
class BooksApp extends React.Component<any, BooksAppState> {
  state: BooksAppState = {
    books: [],
    shelfs_id: [
      { id: 1, name: "Currently Reading", value: "currentlyReading" },
      { id: 2, name: "Want to Read", value: "wantToRead" },
      { id: 3, name: "Read", value: "read" },
    ],
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }
  shelfChangeHandler = (newShelf: string, updateMe: book) => {
    const updatedBooks = [
      ...this.state.books.filter((book) => book.id !== updateMe.id),
    ];
    const newShelfId = this.state.shelfs_id.find(
      (shelf) => shelf.value === newShelf
    );

    updateMe.shelf = newShelfId ? newShelfId.value : "none";
    updatedBooks.push(updateMe);
    BooksAPI.update(updateMe, newShelf);
    this.setState({ books: updatedBooks });
  };
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => (
            <SearchBooks
              addBooktoShelf={this.shelfChangeHandler}
              currentShelfBooks={this.state.books}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={({ history }) => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  {this.state.shelfs_id.map((shelf) => (
                    <BooksShelf
                      key={shelf.id}
                      shelfName={shelf.name}
                      shelfValue={shelf.value}
                      shelfChangeHandler={this.shelfChangeHandler}
                      books={this.state.books.filter(
                        (book) => book.shelf === shelf.value
                      )}
                    />
                  ))}
                </div>
              </div>
              <div className="open-search">
                <button onClick={() => history.push("/search")}>
                  Add a book
                </button>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
