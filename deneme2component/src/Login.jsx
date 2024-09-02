import React from "react";

function Login() {
  return (
    <div className="login">
      <div>
        <p> kullanıcı adı</p>
        <input type="text" name="username" placeholder="kullanıcı adı" />
      </div>
      <div>
        <p>şifre</p>
        <input type="text"></input>
      </div>
      <button>giriş yap</button>
    </div>
  );
}

export default Login;
