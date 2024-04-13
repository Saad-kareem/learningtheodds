import React from "react";
import { IoClose } from "react-icons/io5";
const Search = ({SearchClose}) => {
  return (
    <div className="SeachBar">
      <div>
        <input
          type="text"
          placeholder="Search"
          className="from-control Search"
        />
        <span>
          <IoClose onClick={SearchClose} />
        </span>
      </div>
    </div>
  );
};

export default Search;
