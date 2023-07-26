import React, { useEffect, useState } from "react";
import SimpleInputStyle from "./SimpleInputStyle.module.css";
import ButtonStyle from "../Style/Button.module.css";
import inputStyle from "../Style/Input.module.css";
function SimpleInput(props) {
  //State Management//
  const [formIsValid, setFormIsValid] = useState(false);
  const [data, setData] = useState([]);
  //Name Input States
  const [nameInput, setNameInput] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [nameInputTouched, setNameInputTouched] = useState(false);
  // Email Input States
  const [emailInput, setEmailInput] = useState("");
  const [emailvalid, setEmailValid] = useState(false);
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  // Dynamic Style
  const inputIsValid = !nameValid && nameInputTouched;
  const inputValidationStyle = !inputIsValid ? inputStyle.input : inputStyle.inputInvalid;
  const labelValidationStyle = !inputIsValid ? inputStyle.label : inputStyle.labelInvalid;
  //
  useEffect(() => {
    !nameValid ? setFormIsValid(false) : setFormIsValid(true);
  }, [nameValid]);

  //Email Input func//
  const onEmailInputChange = (e) => {
    e.preventDefault();
    setEmailInput(e.target.value);
    setEmailValid(true);
  };
  const emailInputBlurHandler = () => {
    setEmailInputTouched(true);
  };
  //

  //Input change func//
  const onNameInputChange = (e) => {
    setNameInput(e.target.value);
    setNameValid(true);
  };
  const nameInputBlurHandler = (e) => {
    setNameInputTouched(true);
  };
  const inputFocusHandler = (e) => {
    nameInput.trim().length > 1 && setNameInputTouched(false);
  };
  //

  //Submission form function
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setNameInputTouched(true);
    setEmailInputTouched(true);
    //Validation condition
    if (nameInput.trim().length === 0) {
      setNameValid(false);
      return;
    }
    if (emailInput.trim().length === 0) {
      setEmailValid(false);
      return;
    }
    setNameValid(true);
    const emailSubscription = {
      name: nameInput,
      email: emailInput,
      id: Math.random() * 100,
    };
    data.push(emailSubscription);
    setNameInput("");
    setEmailInput("");
  };

  return (
    <div className={SimpleInputStyle.wrapper}>
      <h1>You will get Latest News and article regarding our produce.</h1>

      <form className={SimpleInputStyle.form} onSubmit={onSubmitHandler}>
        <div className={SimpleInputStyle.control}>
          <label htmlFor="name" className={labelValidationStyle}>
            Yourname:
          </label>
          <input type="text" id="name" className={inputValidationStyle} placeholder="Enter your name please" onChange={onNameInputChange} value={nameInput} onBlur={nameInputBlurHandler} onFocus={inputFocusHandler} />
        </div>

        <div className={SimpleInputStyle.control}>
          <label htmlFor="email" className={labelValidationStyle}>
            Email address:
          </label>
          <input type="email" id="email" className={inputValidationStyle} placeholder="Enter your email please" onChange={onEmailInputChange} value={emailInput} onBlur={emailInputBlurHandler} onFocus={inputFocusHandler} />
        </div>

        <div className={SimpleInputStyle.action}>
          <button disabled={!formIsValid} className={ButtonStyle["btn-primary"]}>
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
