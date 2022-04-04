import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Settings";
import Contact from "./pages/contact/Contact";

import { useContext } from "react";
import { Context } from "./context/Context";
import About from "./pages/about/About";
// import Example1 from "./Example/example1/Example1";
// import Example2 from "./Example/example2/Example2";
// import HomeEx3 from "./Example/example3/HomeEx3";
// import ProductEx3 from "./Example/example3/ProductEx3";
// import BlogEx3 from "./Example/example3/BlogEx3";
// import Example3 from "./Example/example3/Example3";
// import Example4 from "./Example/example4/Example4";
// import Example5 from "./Example/example5/Example5";
// import Example6 from "./Example/example6/Example6";
// import Example7 from "./Example/example7/Example7";

function App() {
  const { user } = useContext(Context);

  return (
    <>
      <TopBar />

      {/* example3 */}
      {/* <Example3 /> */}

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/register" element={user ? <HomePage /> : <Register />} />
        <Route path="/login" element={user ? <HomePage /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/setting" element={user ? <Setting /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/*start Example */}
        {/* <Route path="/ex1" element={<Example1 />} />
        <Route path="/ex2" element={<Example2 />} />
        <Route path="/ex31" element={<HomeEx3 />} />
        <Route path="/ex32" element={<ProductEx3 />} />
        <Route path="/ex33" element={<BlogEx3 />} />
        <Route path="/ex4" element={<Example4 />} />
        <Route path="/ex5" element={<Example5 />} />
        <Route path="/ex6" element={<Example6 />} />
        <Route path="/ex7" element={<Example7 />} /> */}
        {/* end Example */}
      </Routes>
    </>
  );
}

export default App;
