import React from "react";
import ReactDOM from "react-dom";
import './styles/App.css';
import { LoginForm } from './forms/loginForm';

import "./styles.css";

const App = () => {
  return (
    <div className='App'>
      <header style={{padding: 0}} className='App-header'>
        <div className='login-form'>
          <p className='center'>Login</p>

          {/* You will be making this component */}
          <LoginForm />
        </div>
      </header>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
