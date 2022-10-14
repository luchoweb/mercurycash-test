import { Link } from "react-router-dom";

import SignInForm from "../../components/LogInForm/SignIn";
import Layout from "./layout";

const SignInPage = () => {
  return (
    <Layout>
      <h2 className="login__title">Welcome Back</h2>

      <SignInForm />

      <hr />

        <p className="login__signup-text">Don't have an account? <Link to="/signup" className="login__link">Sign up</Link> instead.</p>
    </Layout>
  )
}

export default SignInPage;
