// import img from "../Component/img/grass wall.jpg"
import { MdLoyalty } from "react-icons/md";
import {
  // IoTimeOutline,
  IoChatbubblesOutline,
  IoThumbsUpOutline,
  IoThumbsUpSharp,
  IoThumbsDownOutline,
  // IoSend
} from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

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
              <Link to={`/Blog/${data.id}`}>
                <img src={data.Image} alt="blog Food" />
                <MdLoyalty className="blog-cat-icon" />
                <span>{data.Title}</span>

                <div className="blog-cat">
                  <h3 className="blog-title">{data.Category}</h3>
                  <br />
                  <p className="blog-desc">{data.Description}</p>
                </div>
              </Link>
              <div className="blog-footer">
                <p className="bf-date">{data.date}</p>

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