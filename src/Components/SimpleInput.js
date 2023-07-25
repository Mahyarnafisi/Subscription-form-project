import React, { useState } from "react";
import SimpleInputStyle from "./SimpleInputStyle.module.css";
import ButtonStyle from "../Style/Button.module.css";
import inputStyle from "../Style/Input.module.css";
function SimpleInput(props) {
  //State Management
  const [nameInput, setNameInput] = useState("");
  const [emailNameValid, setEmailNameValid] = useState(false);
  const [data, setData] = useState([]);

  //Input change function
  const onInputChange = (e) => {
    setNameInput(e.target.value);
  };

  //Submission form function
  const onSubmitHandler = (e) => {
    e.preventDefault();

    //Validation condition
    if (nameInput.trim().length === 0) {
      setEmailNameValid(false);
      return;
    }
    setEmailNameValid(true);
    const emailSubscription = {
      email: nameInput,
      id: Math.random() * 100,
    };
    data.push(emailSubscription);
    setNameInput("");
  };

  return (
    <div className={SimpleInputStyle.wrapper}>
      <h1>You will get Latest News and article regarding our produce.</h1>

      <form className={SimpleInputStyle.form} onSubmit={onSubmitHandler}>
        <div className={SimpleInputStyle.control}>
          <label htmlFor="name" className={`${emailNameValid ? inputStyle.label : inputStyle.labelInvalid}`}>
            {!emailNameValid ? "Enter your email please!" : "Email Address:"}
          </label>

          <input type="text" id="name" className={`${emailNameValid ? inputStyle.input : inputStyle.inputInvalid}`} placeholder="Enter your name please" onChange={onInputChange} value={nameInput} />
        </div>
        <div className={SimpleInputStyle.action}>
          <button className={ButtonStyle["btn-primary"]}>
            Subscription Email <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </form>

      <br />
      <h2 className={SimpleInputStyle.notice}>You will be able to unsubscribe our monthly news any time.</h2>
    </div>
  );
}

export default SimpleInput;
