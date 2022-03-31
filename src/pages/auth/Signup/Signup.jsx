import './Signup.css'
const Signup = () => {
    return (
        <div
            className="container__main-content flex flex-justify-center flex-align-center"
        >
            <div className="auth-login-container bg-white pd-2rem br-radius-11 width-30">
                <div className="header text-center">
                    <h1>Signup</h1>
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
                            type="password"
                        />
                    </div>
                    <div className="input-cont input-basic-container">
                        <label className="input-label" for="input">Confirm password</label>
                        <input
                            placeholder=".................."
                            className="input input-basic"
                            id="input"
                            type="password"
                        />
                    </div>
                    <div className="secondary-actionables flex flex-justi-spac-betw">
                        <div className="checkbox">
                            <input type="checkbox" id="remind-me" />
                            <label for="remind-me">I accept all Terms & Conditions</label>
                        </div>
                    </div>
                    <div className="footer-actionables flex flex-col text-center">
                        <button className="btn login-btn btn-primary">
                            Create New Account
                        </button>
                        <span>
                            <a className="link-reset" href="../login/login.html"
                            >Already have an account </a
                            >
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { Signup };
