import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import 'stream-chat-react/dist/css/index.css';
import App from "./App";
import './main.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/ReduxStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store ={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App/>} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <BrowserRouter>
//       <Routes>
//         <Route path="*" element={<App/>} />
//       </Routes>
//     </BrowserRouter>
// );
