import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase/Firebase";
import SignUpForm from "../../Components/sign-up/SignUpForm";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
