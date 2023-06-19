import { Link } from "react-router-dom";

function BlogBanner() {
    return (
      <div className="blog-banner">
        <h2>Welcome to blog blog</h2>
        <div className="create-blog">
                <Link to="/CreateBlog " className="create-blog-link">
                    Create Blog
          </Link>
        </div>
      </div>
    );
}
export default BlogBanner;