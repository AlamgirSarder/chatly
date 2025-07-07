import { createBrowserRouter, RouterProvider } from "react-router";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Home from "./pages/Home";

import store from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotpassword",
    element: <Forgotpassword />,
  },
  {
    path: "/backtologin",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
