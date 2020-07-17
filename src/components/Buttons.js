import React from "react";
import { Icon } from "@blueprintjs/core";
import tweet from "../images/twitter.svg";
import "./Buttons.css";

function Buttons({ click, content }) {
  return (
    <div className="btns">
      <button onClick={click}>
        <Icon icon="refresh" />
      </button>
      <a
        href={`https://twitter.com/intent/tweet?url=${"game"}&text=${content}`}
      >
        <button>
          <img src={tweet} alt="tweet" />
        </button>
      </a>
    </div>
  );
}

export default Buttons;
