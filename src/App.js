import { useEffect, useState } from 'react';
import { getCountries } from './api/getCountries';
import './App.scss';

function App() {
  const [countries, setCountries] = useState();
  const [loading, setLoading] = useState(true);

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
    <div className="App">
      <header className="App-header">
        <ul className="countries">
        {loading ? (<li>Loading countries.</li>) : !loading && countries?.length ? countries.map(country => (
          <li key={`key-${country.id}`}>
            { country.niceName }
          </li>
        )) : (<li>Countries not found.</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
