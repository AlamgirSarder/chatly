import { createBrowserRouter, RouterProvider } from "react-router";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Home from "./pages/Home";

const router = createBrowserRouter(
  [
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
    }
    ,
     {
      path: "",
      element: <Home />,
    }
   
  ]
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;




