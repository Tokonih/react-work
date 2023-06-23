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
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function BlogCard() {
  const { id } = useParams();
  const [like, setLike] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [comment, setComment] = useState([]);

  const likes = () => {
    setLike(like + 1);
  };

  const getData = () => {
    fetch("https://6464b5f3043c103502c0b762.mockapi.io/Blog")
      .then((resp) => resp.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
      });
  };

  const getComment = () => {
    fetch("https://6464b5f3043c103502c0b762.mockapi.io/comments")
      .then((resp) => resp.json())
      .then((data) => {
        const myComments = data.filter((comment) => comment.blog_id === id);
        setComment(myComments.length);
        console.log(myComments);
      });
  };

  const totalcommnent = comment.length;
  useEffect(() => {
    getData();
    getComment();
  }, []);
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
                <IoChatbubblesOutline className="blog-footer-icon" />
                {totalcommnent}
              </p>
              <p onClick={likes}>
                <IoThumbsUpOutline />
              </p>
              <p>
                <IoThumbsDownOutline className="blog-footer-icon" />0
              </p>
            </div>
          </div>
        ))}

      <div>
        {/* <h1>{totalcommnent}</h1> */}
        <h1>{comment}</h1>
      </div>
    </div>
  );
}
export default BlogCard;
