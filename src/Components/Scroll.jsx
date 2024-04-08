import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const Scroll = () => {
  const TopScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="Scroll">
        <button onClick={TopScroll}>
           <IoIosArrowUp/>
        </button>
      </div>
    </div>
  );
};

export default Scroll;
