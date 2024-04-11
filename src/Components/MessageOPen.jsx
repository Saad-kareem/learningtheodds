import React, { useEffect, useState } from "react";
import Message from "./Message";
import { IoClose } from "react-icons/io5";

const MessageOPen = () => {
  const [open, setOPen] = useState(false);

  const MessageOPen = () => {
    setOPen(true);
  };
  const MessageClose = () => {
    setOPen(false);
  };
  return (
    <div>
      <div className="MessageOPen">
        <button className=" btn OPenButton " onClick={MessageOPen}>
          Send Message{" "}
        </button>
      </div>
      {open && <Message MessageClose={MessageClose} />}
    </div>
  );
};

export default MessageOPen;
