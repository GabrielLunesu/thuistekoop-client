import React from "react";
import Link from "next/link";

const MainMenuStatic = () => {
  return (
    <ul className="ace-responsive-menu">
      <li className="visible_list dropitem">
        <Link href="/">
          <span className="list-item">
            <span className="title">Home</span>
          </span>
        </Link>
      </li>
      <li className="visible_list dropitem">
        <Link href="/banner-search-v2">
          <span className="list-item">
            <span className="title">Listings</span>
          </span>
        </Link>
      </li>
      <li className="visible_list dropitem">
        <Link href="/about">
          <span className="list-item">
            <span className="title">About</span>
          </span>
        </Link>
      </li>
      <li className="visible_list dropitem">
        <Link href="/contact">
          <span className="list-item">
            <span className="title">Contact</span>
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default MainMenuStatic;
