import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import "./Login.css";

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <div className="login-logo">
                <img src="https://brandmentions.com/wiki/images/5/50/discord.png" alt="discord-logo"/> 
            </div>

            <Button onClick={signIn} >Sign In</Button>
        </div>
    );
}

export default Login;