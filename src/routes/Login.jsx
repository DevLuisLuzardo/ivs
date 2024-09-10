import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const Login = () => {
    const { user, signIn, signOut } = useContext(UserContext);

    return (
        <div>
            <h1>Login</h1>

        </div>
    );
};

export default Login;