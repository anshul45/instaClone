import React from "react";
import Home from "./Page/Home";
import Login from "./Page/Login";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const PrivateRoute = ({ path, element }) => {
    const userData = useSelector((state) => state.data.userInfo);
    if (
      !userData ||
      (Array.isArray(userData) && userData.length === 0 && path !== "/login")
    ) {
      return <Login />;
    }

    return element;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute path="/" element={<Home />} />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
