import SignUpForm from "../../components/sign-up-form/sign-up-form.component";    
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss';

const Authentication = () => {

    // const logGoogleUser = async () => {
    //     // const response = await signInWithGooglePopup();
    //     // console.log(response);
    //     const { user } = await signInWithGooglePopup();
    //     const userDocRef = await createUserDocumentFromAuth(user);
    // }

    return (
        <div className="authentication-container">
            {/* <button onClick={logGoogleUser}>
            Sign in with Google Popup
            </button> */}
            <SignInForm />
            <SignUpForm />
        </div>
    );
}

export default Authentication;