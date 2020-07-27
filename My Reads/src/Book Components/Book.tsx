import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";

const Book: FunctionComponent<{
  bookTitle: string;
  bookAuthor: string;
  changeShelf: Function;
  currentShelf: string;
  bookImg: { smallThumbnail: string };
}> = (props) => {
  const { bookTitle, bookAuthor, changeShelf, currentShelf } = props;
  let imgURL: string | undefined = undefined;
  if (props.bookImg) imgURL = props.bookImg.smallThumbnail;
  const style = {
    width: 128,
    height: 193,
    backgroundImage: `url("${imgURL}")`,
  };
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={style} />
        <div className="book-shelf-changer">
          <select
            onChange={(event) => changeShelf(event)}
            defaultValue={currentShelf}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{bookTitle}</div>
      <div className="book-authors">{bookAuthor}</div>
    </div>
  );
};
Book.prototype = {
  bookImg: PropTypes.string,
  bookTitle: PropTypes.string,
  bookAuthor: PropTypes.string,
  changeShelf: PropTypes.func,
};
export default Book;
