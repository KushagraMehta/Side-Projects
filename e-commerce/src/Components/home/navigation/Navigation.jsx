import React from "react";
import Cart from "./Cart";
import Search from "./Search";
import User from "./User";

function Navigation() {
  let nav = ["home", "shop", "pages", "blog", "portfolio", "women", "mens"];

  return (
    <nav className="nav">
      <ul>
        {nav.map((e) => (
          <li>
            <a href="asd">{e}</a>
          </li>
        ))}
      </ul>
      <div>
        <Search />
        <Cart />
        <User />
      </div>
    </nav>
  );
}

export default Navigation;
