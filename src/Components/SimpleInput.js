import React from "react";
import SimpleInputStyle from "./SimpleInputStyle.module.css";
import ButtonStyle from "../Style/Button.module.css";
import inputStyle from "../Style/Input.module.css";
function SimpleInput(props) {
  return (
    <div className={SimpleInputStyle.wrapper}>
      <form className={SimpleInputStyle.form}>
        <div className={SimpleInputStyle.control}>
          <label htmlFor="name" className={inputStyle.label}>
            Enter your name
          </label>
          <input type="text" id="name" className={inputStyle.input} placeholder="Your name please" />
        </div>
        <div className={SimpleInputStyle.action}>
          <button className={ButtonStyle["btn-primary"]}>
            Subscription Email <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SimpleInput;
