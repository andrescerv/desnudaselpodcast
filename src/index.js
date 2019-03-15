import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// let Router = (req, res) => {
//     if (req.url === '/') {
//         routerUser (req, res)
//     }
// } 

// HTMLOutputElement.createServer((Router)).listen(port, () => console.log('Estoy en http://localhost:$(port)'))

// import

// contenidosBlog.map(cont, (cont) => {
//     <p></p>
//     <p></p>
// })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
