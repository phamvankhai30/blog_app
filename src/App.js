import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Example1 from "./Example/example1/Example1";
import Example2 from "./Example/example2/Example2";
import HomeEx3 from "./Example/example3/HomeEx3";
import ProductEx3 from "./Example/example3/ProductEx3";
import BlogEx3 from "./Example/example3/BlogEx3";
import Example3 from "./Example/example3/Example3";

function App() {
  const currentUser = true;

  return (
    <>
      <TopBar />

      {/* example3 */}
      <Example3 />

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

        {/*start Example */}
        <Route path="/ex1" element={<Example1 />} />
        <Route path="/ex2" element={<Example2 />} />
        <Route path="/homeex3" element={<HomeEx3 />} />
        <Route path="/productex3" element={<ProductEx3 />} />
        <Route path="/blogex3" element={<BlogEx3 />} />
        {/* end Example */}
      </Routes>
    </>
  );
}

export default App;
