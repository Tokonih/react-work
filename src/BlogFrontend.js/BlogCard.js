import img from "../Component/img/grass wall.jpg"
import { MdLoyalty } from "react-icons/md";
import {
  IoTimeOutline,
  IoChatbubblesOutline,
  IoThumbsUpOutline,
  IoThumbsDownOutline,
} from "react-icons/io5";
function BlogCard() {
    return (
      <div className="blogcard-container">
        <div className="blog-card">
          {/* <h2>Blog Card</h2> */}
          <img src={img} alt="blog Food" />
          <div className="blog-cat">
            <MdLoyalty className="blog-cat-icon" />
            <span>Food</span>
          </div>
          <h3 className="blog-title">Delicious Delicacies</h3>
          <p className="blog-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ex
            molestias cumque esse. Molestiae, dolorum consequuntur quas nostrum
            nemo ratione cupiditate eligendi animi est, velit amet veniam
            corporis harum? Debitis.
          </p>
          <div className="blog-footer">
            <p className="bf-date">
              june 19,2023
            </p>
            {/* <p className="bf-date">
              <IoTimeOutline className="blog-footer-icon" />0
            </p> */}
            <p>
              <IoChatbubblesOutline className="blog-footer-icon" />0
            </p>
            <p>
              <IoThumbsUpOutline className="blog-footer-icon" />0
            </p>
            <p>
              <IoThumbsDownOutline className="blog-footer-icon" />0
            </p>
          </div>
        </div>
      </div>
    );
}
export default BlogCard;