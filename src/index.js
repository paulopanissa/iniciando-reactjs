import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloWorld from './HelloWorld/HelloWorld'
import PropsValidation from './PropsValidation/PropsValidation'
import Events from './Events/Events'
import Translate from "./Translate/Translate";

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <section>
    <h2> 1) Componente: Hello World</h2>
    <HelloWorld txt="Hello World from Component, Curso de React.JS"/>
    <h2> 2) Componente: Props Validation</h2>
    <PropsValidation name="Paulo Panissa" age={30} height={1.85}/>
    <h2> 3) Componente: Eventos</h2>
    <Events />
    <h2> 4) Componente: Translate, <small>obs: tem que criar server do google-translate-api porta 9000</small></h2>
    <Translate />
  </section>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
