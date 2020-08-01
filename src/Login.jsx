import React from "react";

export default function Login() {
  return (
    <form className="container">
      <div className="row">Please enter your username and password</div>

      <div className="row">
        <div className="col-12">
          <label>Username</label>
        </div>
        <div className="col-12">
          <input id="username" name="username" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <label>Password</label>
        </div>
        <div className="col-12">
          <input id="password" name="password" type="password" />
        </div>
      </div>

      <button type="button" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}
