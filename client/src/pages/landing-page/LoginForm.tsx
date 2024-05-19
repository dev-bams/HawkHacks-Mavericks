import DashBoardPage from "../dashboard-page/DashBoardPage";
import "./styles/form.css";
import { FaUser, FaLock } from "react-icons/fa";

function LoginForm() {
    return (
    <div className="loginForm">
        <h1>Login into Eduken</h1>
        <form>
            <div className="inputBox 
             border flex flex-row gap-3">
                <FaUser />
                <input type="text"  placeholder="Username" />
            </div>
            <div className="inputBox flex flex-row gap-3">
                <FaLock />
                <input type="password"  placeholder="Password" />
            </div>
            
        </form><div className="buttons flex flex-col gap-4">
           
            <button  title="submit" >
                Login
            </button>
            <a href="#">Don't have an account? Sign Up Here </a>
            </div>
    </div>
    );
}

export default LoginForm;