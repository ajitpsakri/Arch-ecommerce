import './Login.css'

const Login = () => {
    return (
        <div
            className="log__main-content flex flex-justify-center flex-align-center bg-grey"
        >
            <div className="auth-login-container bg-white pd-2rem br-radius-11 width-30">
                <div className="header text-center">
                    <h1>Login</h1>
                </div>
                <div className="main">
                    <div className="input-cont input-basic-container">
                        <label className="input-label" for="input">Email</label>
                        <input
                            placeholder="yourawsm@gmail.com"
                            className="input input-basic"
                            id="input"
                            type="text"
                        />
                    </div>
                    <div className="input-cont input-basic-container">
                        <label className="input-label" for="input">Password</label>
                        <input
                            placeholder=".................."
                            className="input input-basic"
                            id="input"
                            type="text"
                        />
                    </div>
                    <div className="secondary-actionables flex flex-justi-spac-betw">
                        <div className="checkbox">
                            <input type="checkbox" id="remind-me" />
                            <label for="remind-me">Remind me</label>
                        </div>
                        <p className="forget-password">
                            <a className="remove-underline" href="">Forgot your Password?</a>
                        </p>
                    </div>
                    <div className="footer-actionables flex flex-col text-center">
                        <button className="btn login-btn btn-primary">Login</button>
                        <span>
                            <a className="link-reset" href="../signup/signup.html"
                            >Create New Account </a
                            >
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { Login }
