import React from "react";
import s from "./Message.module.css";

const Message = () => {
  return (
    <div className={s.warningInfo}>
      <p>Please add contacts to your phonebook</p>
    </div>
  );
};

export default Message;
