import { createElement } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import ChatPage from "./Pages/ChatPage";
import Home from "./Pages/Home";
import UploadPage from "./Pages/UploadPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(App),
    children: [
      { index: true, element: createElement(Home) },
      { path: "upload", element: createElement(UploadPage) },
      { path: "chat/:documentId", element: createElement(ChatPage) },
      {
        path: "*",
        element: createElement(Navigate, { to: "/", replace: true }),
      },
    ],
  },
]);
