import { useState } from "react";
import BlogNav from "../BlogFrontend.js/BlogNav";

function CreateBlog() {
  const [Title, setTitle] = useState("");
  const [Category, setCategory] = useState("");
  const [Description, setDescription] = useState("");
  const [Image, setImage] = useState("");
  //   const [Date, setDate] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const BlogData = {
      Title: Title,
      Category: Category,
      Description: Description,
      Image: Image,
      date: new Date().toLocaleString()
    };
    fetch("https://6464b5f3043c103502c0b762.mockapi.io/Blog", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(BlogData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("blog posted succesfully ");
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <BlogNav />
      <div>
        <form action="" onSubmit={handlesubmit}>
          <div>
            <label htmlFor="">Title </label>
            <input
              type="text"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>category </label>
            <select
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Hygiene">Hygiene</option>
              <option value="Junk">Junk</option>
              <option value="Vegeterian">Vegeterian</option>
              <option value="Baking">Baking</option>
            </select>
          </div>

          <div>
            <label htmlFor="">Description </label>
            <textarea
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label htmlFor="">Image </label>
            <input
              type="text"
              value={Image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <button>Add blog </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
