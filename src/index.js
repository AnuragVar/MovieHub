import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App.js";
import reportWebVitals from "./reportWebVitals";
// import StarRating from "./components/StarRating";
// function Test() {
//   const [rating, setRating] = useState(0);

//   return (
//     <div>
//       <StarRating maxRating={20} setRating={setRating} />
//       <p>You gave {rating} rating</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// <React.StrictMode>
// {
//   /* <StarRating maxRating={10} />
//     <StarRating maxRating={15} color="blue" size="24" />
//     <StarRating
//       comments={["Bad", "Average", "Good", "Very Good", "Excellent"]}
//       className=""
//       defaultRating={1}
//     />
//     <Test /> */
// }
// {
//   /* </React.StrictMode> */
// }
