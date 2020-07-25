import React, { FunctionComponent } from "react";

type SquareProps = {
  value: Number;
  onClick: Function;
};
const Square: FunctionComponent<SquareProps> = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;
  return (
    <button className={style} onClick={() => onClick()}>
      {value}
    </button>
  );
};
export default Square;
