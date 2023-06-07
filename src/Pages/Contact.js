import Navigation from "../Component/Navigation";
// import Banner from "../Component/Banner";
import img from "../Component/img/banner2.jpg";

function Contact() {
  return (
    <div>
      <Navigation />
      <div className="Banner">
        <div className="contact-page">
          <div className="contact-left">
            <img src={img} alt="" />
          </div>
          <div className="contact-right">
            <form action="">
              <div>
                <label htmlFor="">Name</label>
                <input type="text" />
                <span></span>
              </div>
              <div>
                <label htmlFor=""> Last Name</label>
                <input type="text" />
                <span></span>
              </div>
              <div>
                <label htmlFor="">Phone</label>
                <input type="text" />
                <span></span>
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="text" />
                <span></span>
              </div>
              <div>
                <label htmlFor=""></label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Leave a brief note"></textarea>
                <span></span>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
