import { useState } from "react";
import { validateEmail, validatePassword } from "../../utils/formValidators";

import "./styles.scss";

const LogInForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [formErrors, setFormErrors] = useState();
  const [inputPasswordType, setInputPasswordType] = useState(true);

  const submitHandle = (event) => {
    event.preventDefault();

    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    setFormErrors({
      email: !isValidEmail && true,
      password: !isValidPassword && true
    });

    if ( !isValidEmail || !isValidPassword )
      return false;

    const data = { email, password };
    console.log('Login successfully', data);
  }

  return (
    <form onSubmit={(event) => submitHandle(event)} className="form">
      <div className="form__group">
        <input
          type="email"
          className="form__input"
          required={true}
          placeholder="Email"
          onKeyUp={(event) => setEmail(event.target.value)}
        />
        
        { formErrors?.email && <p className="form__error">Enter a valid email.</p> }
      </div>

      <div className="form__group">
        <input
          type={inputPasswordType ? 'password' : 'text'}
          className="form__input"
          required={true}
          placeholder="Password"
          onKeyUp={(event) => setPassword(event.target.value)}
        />

        { formErrors?.password && <p className="form__error">Enter a valid password.</p> }
      </div>

      <button
        className="form__button"
        disabled={!email || !password}
      >
        Log In
      </button>
    </form>
  )
}

export default LogInForm;
