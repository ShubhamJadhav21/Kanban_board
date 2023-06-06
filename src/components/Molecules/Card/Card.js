import React from "react";
import style from "./Card.module.css";
import { HiTemplate } from "react-icons/hi";
function Card() {
  return (
    <div>
      <div className={style.card}>
        <div className={style.top}>
          <span className={style.heading}>To Do</span>
          <span className={style.dot}>...</span>
        </div>
        <div className={style.bottom}>
          <span className={style.add}>+ Add a card</span>
          <span>
            <HiTemplate style={{ marginLeft: "10rem" }} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
