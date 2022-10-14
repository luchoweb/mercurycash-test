import {Link} from "react-router-dom";

import Layout from "./layout";
import SignUpForm from "../../components/LogInForm/SignUp";

const SignUpPage = () => {
  return (
    <Layout classname="sign-up">
        <h2 className="login__title">Create your account</h2>

        <SignUpForm />

        <hr />

        <p className="login__signup-text">Have an account? <Link to="/" className="login__link">Log in</Link> instead.</p>
    </Layout>
  )
}

export default SignUpPage;
