import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import {auth} from "./firebase";
import { useState } from "react";

function Login() {
  const History = useHistory();
const [email,setEmail] = useState("");
const [password,setPassward] = useState("");

  const login = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((auth)=>{
      History.push("/");
    })
    .catch((e) => alert(e.massage))
  };

  const register = (event)=>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      History.push("/");
    })
    .catch((e) => alert(e.massage))
  }

  return (
    <div className="login">
      <Link to="/">
        <img className="login__image" src="img/amazon_dark.png" alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} type="text" />
          <h5>Password</h5>
          <input value={password} onChange={event => setEmail(event.target.value)} type="password" />
          <button onClick={login} onChange={event => setPassward(event.target.value)} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.{" "}
        </p>
        <button onClick={register} className="login__registerButton">
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
