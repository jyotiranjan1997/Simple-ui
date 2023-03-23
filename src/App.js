import logo from "./logo.svg";
import Styles from "./App.module.css";
import { useState } from "react";
function App() {
  const [active, setActive] = useState(false);
  return (
    <div className={Styles.App}>
      <div className={Styles.container}>
        <div classname={Styles.container_data}>
          <div classname={Styles.container_top}>
            <img className={Styles.Logo} src={logo} alt="img" />
            <p>
              SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM
              TEXT
            </p>
          </div>
          <div className={Styles.container_middle}>
            <span
              className={active ? Styles.active : Styles.inactive}
              onClick={() => {
                setActive(true);
              }}
            >
              Login
            </span>
            <span
              className={active ? Styles.inactive : Styles.active}
              onClick={() => {
                setActive(false);
              }}
            >
              Signup
            </span>
          </div>
          {active ? (
            <form>
              <input type="email" name="email" placeholder="Email Address" />
              <input type="password" name="password" placeholder="Password" />
              <button>Login</button>
              <a class="forgot-btn" href="/#">
                Forgot Password?
              </a>
            </form>
          ) : (
            <form>
              <input type="text" name="name" placeholder="Full Name" />
              <input type="email" name="email" placeholder="Email Address" />
              <input type="password" name="password" placeholder="Password" />
              <input
                type="password"
                name="cpassword"
                placeholder="Confirm Password"
              />
              <button>Signup</button>
            </form>
          )}
          <div className={Styles.container_bottom}>
            <p className={Styles.login_text}>
              or {active === "login" ? "login" : "signup"} with
            </p>
            <div className={Styles.social_icons}>
              <span>
                <img src={"./google.svg"} alt="google-icon" />
              </span>
              <span>
                {" "}
                <img src={"./facebook"} alt="facebook-icon" />
              </span>
              <span>
                {" "}
                <img src={"./twitter.svg"} alt="twitter-icon" />
              </span>
            </div>
            {active === "login" ? (
              <p>
                Don't have an Account? <span>Create new now!</span>
              </p>
            ) : (
              <p>
                Do have an Account? <span>login!</span>
              </p>
            )}
            <p>
              By signing up, you are agree with our
              <span>Term & Conditions</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
