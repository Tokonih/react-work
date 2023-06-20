import { useState } from "react";
import { useEffect } from "react";
import BlogNav from "./BlogNav";
import { useParams } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import { MdLoyalty } from "react-icons/md";


function BlogSingle() {
  const { id } = useParams();
  const [food, setFood] = useState({});
  const [comments, setcomments] = useState([]);
  const [comment, setcomment] = useState("");
  const [commentErr, setcommentEff] = useState(false);
  const getFood = () => {
    fetch(`https://6464b5f3043c103502c0b762.mockapi.io/Blog/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setFood(data);
        console.log(data);
      });
  };

  const getComments = () => {
    fetch("https://6464b5f3043c103502c0b762.mockapi.io/comments")
      .then((resp) => resp.json())
      .then((data) => {
        const myComments = data.filter((comment) => comment.blog_id === id);
        setcomments(myComments);
      });
  };

  const handleComment = () => {
    if (comment == "") {
      setcommentEff(true);
      alert(" field required");
      return;
    }

    let commentDetail = {
      body: comment,
      date: new Date().toLocaleString(),
      blog_id: id,
    };

    fetch("https://6464b5f3043c103502c0b762.mockapi.io/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentDetail),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
          alert("comment made");
          setcomments((preComments) => [...preComments, data])
      })
      .catch((err) => {
          console.log(err);
          
      });
      setcomment('');
  };

  useEffect(() => {
    getFood();
    getComments();
  }, []);

  return (
    <div >
        <BlogNav />
      <div className="blogsingle">
        <img src={food.Image} alt="" />
        <h3><MdLoyalty/>{food.Title}</h3>
        <h3>{food.Category}</h3>
        <p>{food.Description}</p>
        <p>{food.date}</p>

        <div className="blog-comment">
          <form action="" className="blogcomment-form">
            <textarea
              value={comment}
                          onChange={(e) => setcomment(e.target.value)}
                          placeholder="Add a comment..."
            ></textarea>
            <button type="button" onClick={handleComment}>
              {<IoSend />}
            </button>
          </form>
        </div>
        <div className="singleblog-comment">
          <h3>Comment: {comments.length}</h3>
          {comments.length !== 0 ? (
            comments.map((commt) => (
              <div key={commt.id} className="comments">
                <p>{commt.body}</p>
                <p>{commt.date}</p>
              </div>
            ))
          ) : (
            <p> Be the first to comment </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default BlogSingle;
