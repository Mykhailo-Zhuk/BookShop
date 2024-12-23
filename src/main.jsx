import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import { createRoot } from 'react-dom/client'
// import { MyProvider } from "../context/context.jsx";
// import "./index.css";
// import App from "./App.jsx";
// import Error from "../src/components/Error.jsx";
// import ShopCar from "../src/components/ShopCard.jsx";
// import { React } from "react";
// import path from "path";
// import { error } from "console";

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//   },
//   {
//     path: "ShopCar/:shopId",
//     element: <ShopCar />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
