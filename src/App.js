import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import SignInPage from './pages/account/signIn';
import SignUpPage from "./pages/account/signUp";
import NotFoundPage from "./pages/404/";

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/signup">
                <SignUpPage />
            </Route>
            <Route exact={true} path="/">
                <SignInPage />
            </Route>
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
