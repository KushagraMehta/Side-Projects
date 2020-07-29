import React, { useState, useEffect } from "react";
import { imageAPI } from "./imageAPI";

export interface ImageProps {
  item: string;
}

const Image: React.SFC<ImageProps> = ({ item }) => {
  let [URL, setURL] = useState({ data: "" });
  useEffect(() => {
    imageAPI(item).then((data) => {
      let image = data["results"][Math.floor(Math.random() * 5)];
      setURL({ data: image["urls"]["regular"] });
    });
  }, [item]);
  return (
    <div className={`gallary--image ${item}`}>
      <img className={`${item}`} alt={item} src={`${URL.data}`} />
      <div className="caption">
        <div className="text">{item.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default Image;
