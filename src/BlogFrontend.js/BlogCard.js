// import img from "../Component/img/grass wall.jpg"
import { MdLoyalty } from "react-icons/md";
import {
  // IoTimeOutline,
  IoChatbubblesOutline,
  IoThumbsUpOutline,
  IoThumbsUpSharp,
  IoThumbsDownOutline,
} from "react-icons/io5";
import { useState } from "react";
function BlogCard() {

  const [like, setLike] = useState(IoThumbsUpOutline);
  const [blogs, setBlogs] = useState([])

  const likes = () => {
        setLike(IoThumbsUpSharp);
  }

  fetch("https://6464b5f3043c103502c0b762.mockapi.io/Blog")
    .then((resp) => resp.json())
    .then((data) => {
      setBlogs(data)
      console.log(data)
    });
    return (
      <div className="blogcard-container">
        {blogs &&
          blogs.map((data) => (
            <div className="blog-card">
              {/* <h2>Blog Card</h2> */}
              <img src={data.Image} alt="blog Food" />
              <div className="blog-cat">
                <MdLoyalty className="blog-cat-icon" />
                <span>{data.Title}</span>
              </div>
              <h3 className="blog-title">{data.Category}</h3>
              <p className="blog-desc">{data.Description}</p>
              <div className="blog-footer">
                <p className="bf-date">{data.date}</p>
                {/* <p className="bf-date">
              <IoTimeOutline className="blog-footer-icon" />0
            </p> */}
                <p>
                  <IoChatbubblesOutline className="blog-footer-icon" />0
                </p>
                <p onClick={likes}>{like}0</p>
                <p>
                  <IoThumbsDownOutline className="blog-footer-icon" />0
                </p>
              </div>
            </div>
          ))}
      </div>
    );
}
export default BlogCard;