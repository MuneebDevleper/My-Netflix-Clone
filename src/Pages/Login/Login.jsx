
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import logo from "../../assets/logo.png";
import { signin, signup } from '../../Firebase';


function Login() {
  const [loginState, setLoginState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  const [email, setMail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const user_auth = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (loginState === "Sign Up" && !name.trim()) {
      setError("Please enter your name.");
      return;
    }

    try {
      setLoading(true);

      if (loginState === "Sign In") {
        await signin(email.trim(), password);
      } else {
        await signup(name.trim(), email.trim(), password);
      }

      navigate("/");
    } catch (err) {
      console.error(err);

      if (err.code === "auth/invalid-credential" ||
          err.code === "auth/wrong-password" ||
          err.code === "auth/user-not-found") {
        setError("Email ya password ghalat hai, ya account pehle create nahi hua.");
      } else if (err.code === "auth/email-already-in-use") {
        setError("Ye email pehle se registered hai. Sign In karo.");
      } else if (err.code === "auth/weak-password") {
        setError("Password kam az kam 6 characters ka hona chahiye.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError(err.message || "Kuch ghalat ho gaya. Dobara try karo.");
      }
    } finally {
      setLoading(false);
    }
  };

  const changeLoginState = (state) => {
    setLoginState(state);
    setError("");
  };

  return (
    <div className="log-in">

      <img src={logo} alt="Netflix logo" />

      <div className="loginform">
        <h2>{loginState}</h2>

        <form onSubmit={user_auth}>
          {loginState === "Sign Up" && (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              autoComplete="name"
            />
          )}

          <input
            type="email"
            value={email}
            onChange={(e) => setMail(e.target.value)}
            placeholder="Email"
            autoComplete="email"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
            autoComplete={
              loginState === "Sign In"
                ? "current-password"
                : "new-password"
            }
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Please wait..." : loginState}
          </button>
        </form>

        <div className="help">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <p>Need Help?</p>
        </div>

        <div className="add-user">
          {loginState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => changeLoginState("Sign Up")}>
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => changeLoginState("Sign In")}>
                Sign In Now
              </span>
            </p>
          )}
        </div>
        
      </div>
      
    </div>
    
  );
}

export default Login;

