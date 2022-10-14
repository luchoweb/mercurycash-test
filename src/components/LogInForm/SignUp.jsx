import { useState, useEffect } from "react";
import { getCountries } from "../../api/getCountries";
import { validateEmail, validatePassword } from "../../utils/formValidators";

import eyeIcon from "../../assets/images/eye.png";

import "./styles.scss";

const SignUpForm = () => {
  const [loading, setLoading] = useState(true);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [countries, setCountries] = useState();
  const [inputPasswordType, setInputPasswordType] = useState(true);
  const [inputPassword2Type, setInputPassword2Type] = useState(true);

  const submitHandle = (event) => {
      event.preventDefault();

      const isValidEmail = validateEmail(email);
      const isValidPassword = validatePassword(password);

      if ( !isValidEmail || !isValidPassword )
          return false;

      const data = { email, password };

      // Login
      console.log('Login successfully', data);
  }

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await getCountries();

      if ( countries?.length )
        setCountries(countries);

      setLoading(false);
    }

    if ( !countries ) fetchCountries();
  }, []);

  return (
    <form onSubmit={(event) => submitHandle(event)} className="form" autoComplete="off">
      <div className="form__group">
          <input
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

        <div className="form__group">
            <div className="form__input-group">
                <input
                    type={inputPassword2Type ? 'password' : 'text'}
                    className="form__input"
                    required={true}
                    placeholder="Password"
                    onKeyUp={(event) => setPassword2(event.target.value)}
                />

                <img
                    src={eyeIcon}
                    alt="eye"
                    className="form__eye"
                    onClick={() => setInputPassword2Type(!inputPassword2Type)}
                />
            </div>

            { password2 && password2 !== password && <p className="form__error">Password doesn't match.</p> }
        </div>

      <div className="form__group">
        <select id="countries" className="form__select">
          { countries ? countries?.map(country => (
              <option key={`c-${country.id}`} value={country.iso}>
                {country.niceName}
              </option>
          ))
          : <option disabled={true} selected={true}>
              Error loading countries, please refresh the page
            </option>
          }
        </select>
      </div>
    </form>
  )
}

export default SignUpForm;
