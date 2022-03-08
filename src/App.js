import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";

function App() {
  const currentUser = true;
  return (
    <>
      <TopBar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/posts" element={<HomePage />} />
        {/* <Route
          path="/register"
          element={currentUser ? <HomePage /> : <Register />}
        /> */}
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login" element={currentUser ? <HomePage /> : <Login />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<Single />} />

        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        {/* <Route
          path="/setting"
          element={currentUser ? <Setting /> : <Login />}
        /> */}
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;
