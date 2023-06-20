import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../src/Pages/About";
import Booking from "../src/Pages/Booking";
import Contact from "../src/Pages/Contact";
import Menu from "../src/Pages/Menu";
import Home from "../src/Pages/Home";
import Userinfo from "./Pages/userInfo";
import Posts from "./Pages/Posts";
import "./App.css";
import FoodDetails from "./Pages/FoodDetails";
import Blog from "./BlogFrontend.js/Blog";
// import CreateEmp from "./Dashboard.js/createEmp";
import BlogDashboard from "./BlogAdmin.js/BlogDashboard";
import CreateBlog from "./BlogAdmin.js/CreateBLog";
import BlogSingle from "./BlogFrontend.js/BlogSingle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Menu/:category/:foodId" element={<FoodDetails />} />
        <Route path="/UserInfo" element={<Userinfo />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog/:id" element={<BlogSingle />} />
        <Route path="/BlogDashboard" element={<BlogDashboard />} />
        <Route path="/CreateBlog" element={<CreateBlog />} />

        {/* <Route path="/CreateEmp" element={<CreateEmp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
