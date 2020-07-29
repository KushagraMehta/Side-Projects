import * as React from "react";
import Image from "./Image";
import "./gallary.scss";
const Gallary: React.FC = () => {
  let items = ["men", "women", "sale", "shoes", "accessories", "new"];
  return (
    <div className="container">
      <div className="gallary">
        {items.map((item) => (
          <Image item={item} />
        ))}
      </div>
    </div>
  );
};

export default Gallary;
