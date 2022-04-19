import './Logout.css'
import { Link } from "react-router-dom";
const Logout = () => {
    return (
        <div
            className="log__main-content flex flex-justify-center flex-align-center bg-grey"
        >
            <div className="auth-login-container bg-white pd-2rem br-radius-11 width-30">
                <div className="main text-center">
                    <h1 className="pd-1010rem">Logged out</h1>
                    <p className="pd-1010rem">Goodbye,Thanks for using Arc-store</p>
                    <Link className="" to="/login">
                        <button className="btn btn-primary width-100 pd-1010rem">
                            Sign in again
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export { Logout }
