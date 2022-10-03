import "./Authentication.scss";
import SignInForm from "../../Components/sign-in-form/SignInForm";
import SignUpForm from "../../Components/sign-up/SignUpForm";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
