import React from "react";
import arrowDown from "../../assets/desktop/Group 3downArrow.png";
import arrowUp from "../../assets/desktop/icon-arrow-up.svg";
import "./Button.css";

interface Props {
  more: Boolean;
  setMore: React.Dispatch<React.SetStateAction<Boolean>>;
}

function Button(props: Props) {
  const { more, setMore } = props;

  return (
    <div className="btn" onClick={() => setMore(!more)}>
      <button>{more ? "Less" : "More"}</button>
      {more ? (
        <img src={arrowUp} alt="arrow up" />
      ) : (
        <img src={arrowDown} alt="arrow down" />
      )}
    </div>
  );
}

export default Button;
