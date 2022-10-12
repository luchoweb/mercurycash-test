import { useState } from 'react';
import SignInPage from './pages/login/SignIn';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <SignInPage />
    </div>
  );
}

export default App;
