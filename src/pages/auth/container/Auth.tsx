
import Login from "../components/login/container"
import Register from "../components/register/container"


const Auth = () => {
    return (
        <div>
            {location.pathname === "/login" && <Login />}
            {location.pathname === "/register" && <Register />}
        </div>
    )
}

export default Auth