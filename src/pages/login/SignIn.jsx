import SignInForm from "../../components/LogInForm/SignIn";
import Layout from "./layout";

const SignInPage = () => {
  return (
    <Layout>
      <h2 className="login__title">Welcome Back</h2>

      <SignInForm />

      <hr role="separator" />

      <p className="login__signup-text">Don't have an account? <a href="#" className="login__link">Sign up</a> instead.</p>
    </Layout>
  )
}

export default SignInPage;
