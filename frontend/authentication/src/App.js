import './App.css'
import '../node_modules/bootstrap5/src/css/bootstrap.min.css'

function App() {
    const login = document.querySelector(".login-a");
    const register = document.querySelector(".register-a");
    const forgot = document.querySelector(".forgot-a");
    const close = document.querySelector(".iconclose");

    const loginSection = document.querySelector(".login");
    const registerSection = document.querySelector(".register");
    const forgotSection = document.querySelector(".forgot");

// Click on Register from index html and set display none for login and flex for register.
    register.addEventListener("click", (e) => {
        loginSection.style.display = "none";
        registerSection.style.display = "flex";
    });

// Reverse above function with Login and Register
    login.addEventListener("click", (e) => {
        registerSection.style.display = "none";
      loginSection.style.display = "flex";
    });

 // Hide Login and show Forget
    forgot.addEventListener("click", (e) => {
        loginSection.style.display = "none";
        forgotSection.style.display = "flex";
    });
 
 //Cross Icon click on forget page, Hide Forget and show Login.
    close.addEventListener("click", (e) => {
        loginSection.style.display = "flex";
        forgotSection.style.display = "none";
    });
    
  return (
      <main>
    <div className="container box">
        <div className="login main-container">
            <div className="login-form form-container">
                <form>
                    <h1 className="text-center pb-3">Login</h1>
                    <input type="text" className="form-control form-control-lg mb-3" placeholder="Email-ID" />

                    <input type="password" className="form-control form-control-lg mb-3" placeholder="Password" />

                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg btn-block loginP">Let's Go </button>
                    </div>
                    <a href="#" className="forgot-a">Forgot Password?</a>

                    <span>
                        New to Poller App?
                        <a href="#" className="register-a">Register here</a>
                    </span>


                </form>

            </div>
        </div>
        <div className="register main-container">
            <div className="register-form form-container">
                <form>
                    <h1 className="text-center pb-3">Register !</h1>
                    <input type="email" className="form-control mb-3" placeholder="Your Email Address" />


                    <input type="text" className="form-control form-control-lg mb-3" placeholder="Name" />

                    <input type="password" className="form-control form-control-lg mb-3" placeholder="Password" />

                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg btn-block registerP">Create Account</button>
                    </div>
                    <span>
                        Already have an account?
                        <a href="#" className="login-a">Login </a>
                    </span>
                    </form>
            </div>
        </div>
        <div className="forgot main-container">
            <div className="forgot-form form-container">
                <form action="">
                    <h2 className="text-center pb-3">Don't worry we got you</h2>
                    <input type="password" className="form-control form-control-lg mb-3" placeholder="Password" />
                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg btn-block forgotP">Reset Password</button>
                    </div>
                    <span>
                        A reset link will be sent to your email address
                    </span>
                </form>


                <div className="iconclose">
                    <i className="fas fa-times">X</i>
                </div>

            </div>
        </div>
    </div>
</main>

  );
}

export default App;
