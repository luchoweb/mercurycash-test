import { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/formValidators";

import eyeIcon from "../../assets/images/eye.png";

import "./styles.scss";

const SignInForm = () => {
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [password, setPassword] = useState();
  const [remember, setRemember] = useState(email && true);
  const [inputPasswordType, setInputPasswordType] = useState(true);

  const submitHandle = (event) => {
    event.preventDefault();

    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    if ( !isValidEmail || !isValidPassword )
      return false;

    const data = { email, password };

    if ( !remember ) {
        localStorage.removeItem('email');
    } else {
        localStorage.setItem('email', email);
    }

    // Login
    console.log('Login successfully', data);
  }

  return (
    <form onSubmit={(event) => submitHandle(event)} className="form">
      <div className="form__group">
        <input
          defaultValue={email}
          type="email"
          className="form__input"
          required={true}
          placeholder="Email"
          onKeyUp={(event) => setEmail(event.target.value)}
        />

          { email && !validateEmail(email) && <p className="form__error">Enter a valid email.</p> }
      </div>

      <div className="form__group">
          <div className="form__input-group">
            <input
              type={inputPasswordType ? 'password' : 'text'}
              className="form__input"
              required={true}
              placeholder="Password"
              onKeyUp={(event) => setPassword(event.target.value)}
            />

            <img
              src={eyeIcon}
              alt="eye"
              className="form__eye"
              onClick={() => setInputPasswordType(!inputPasswordType)}
            />
        </div>

          { password && !validatePassword(password) && <p className="form__error">Enter a valid password.</p> }
      </div>

      <Link to="/reset-password" className="form__link reset-password">
        Forgot Password
      </Link>

      <div className="form__group checkbox">
        <input
          type="checkbox"
          id="remember"
          className="checkbox"
          checked={remember}
          onChange={() => setRemember(!remember)}
        />
        <label htmlFor="remember">Remember me.</label>
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

export default SignInForm;
