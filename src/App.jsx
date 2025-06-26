// import { createBrowserRouter, RouterProvider } from "react-router";
// import Registration from "./pages/Registration";
// import Login from "./pages/Login";

// const router = createBrowserRouter(
//   [
//     {
//       path: "/registration",
//       element: <Registration />,
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//   ],
//   {
//     basename: "/chating-application",
//   }
// );

// function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;





import { HashRouter as Router, Routes, Route } from "react-router";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}


export default App;
