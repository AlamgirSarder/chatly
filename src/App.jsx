import { HashRouter, Routes, Route } from "react-router";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

function App() {
  return (
    <HashRouter basename="/chating-application">
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
