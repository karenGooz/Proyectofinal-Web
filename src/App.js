import React from 'react';
import logo from './logo-w.png';
import Posts from './components/posts/Posts';

import './App.scss';

function App() {
  function async(){
    return(
      <Posts/>
    );
  }
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo noUserSelect" alt="logo" />
        <div className="btns">
          <div className="btn undefault noUserSelect" id="btnlogin"><span>Login</span></div>
          <div className="btn noUserSelect" id="btnSignUp"><span>Sign Up</span></div>
        </div>
        <div className="paraph noUserSelect">
          <p className="noUserSelect">Desliza para ver todas la publicaciones. 
            Si quieres publicar o comentar, debes 
             <span> Login</span> o <span>Sign Up.</span></p>
        </div>
      </header>
    </div>
  );
}

export default App;