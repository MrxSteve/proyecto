import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorkerRegistration';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

console.log(
  `%cProyecto hecho por Steve Tobar.
    Mis redes:
    * Github : https://github.com/MrxSteve
    * Instagram : https://www.instagram.com/_mrxsteve/`,
  "color:red; font-size:20px; font-weight: bold; -webkit-text-stroke: 1px black; border-radius:10px; padding: 20px; background-color: black;"
);

/**
 * Se establecen eventos para el service worker, para determinar si se debe actualizar
 */
serviceWorker.register({
  onSuccess: () => {
    const event = new CustomEvent("changeServiceWorker", {
      detail: { type: "SW_INIT" },
    });
    document.dispatchEvent(event);
  },
  onUpdate: (registration) => {
    // Cuando existe una nueva versión de la aplicación se ejcuta el evento
    const event = new CustomEvent("changeServiceWorker", {
      detail: {
        type: "SW_UPDATE",
        payload: registration,
      },
    });
    document.dispatchEvent(event);
  },
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
