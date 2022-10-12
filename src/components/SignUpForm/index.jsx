import { useState } from "react";
import { getCountries } from "../../api/getCountries";

const SignUpForm = () => {
  const [countries, setCountries] = useState();

  const submitHandle = (event) => {
    event.preventDefault();

    console.log(event.target.username.value)
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
    <form onSubmit={(event) => submitHandle(event)} className="form">
      <div className="form__group">
        <input type="text" id="username" className="form__input" />
      </div>
    </form>
  )
}

export default SignUpForm;
