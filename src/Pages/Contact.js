import Navigation from "../Component/Navigation";
// import Banner from "../Component/Banner";
import img from "../Component/img/banner2.jpg";
import { useState } from "react";


function Contact() {
  const [fname, setFname] = useState('') 
  const [lname, setLname] = useState('') 
  const [phone, setPhone] = useState('') 
  const [email, setEmail] = useState('') 
  const [text, setText] = useState('') 
  const [emailinfo, setEmailnfo] = useState(false) 

  const handleEmail = (e) =>{
    e.preventDefault()
    e.target.checked ? setEmailnfo (true) : setEmailnfo (false)
    // console(setEmailINfo)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  // let user = {
  //   firt_name: fname,
  //   last_name: lname,
  //   phone: phone,
  //   email: email,
  //   text:text
  // }
  // console.log(user)

  return (
    <div>
      <Navigation />
      <div className="Banner">
        <div className="contact-page">
          <div className="contact-left">
            <img src={img} alt="" />
          </div>
          <div className="contact-right">
            <form action="" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="">First Name</label>
                <input type="text"
                value={fname}
                onChange={(e) =>(setFname(e.target.value))}
                />
                <span></span>
              </div>
              <div>
                <label htmlFor=""> Last Name</label>
                <input type="text"
                value={lname}
                onChange={(e)=>(setLname(e.target.value))}
                />
                <span></span>
              </div>
              <div>
                <label htmlFor="">Phone</label>
                <input type="text" 
                value={phone}
                onChange={(e)=>(setPhone(e.target.value))}
                />
                <span></span>
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="text"
                value={email}
                onChange={(e)=>(setEmail(e.target.value))}
                />
                <span></span>
              </div>
              <div>
                <label htmlFor=""></label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Leave a brief note"
                value={text}
                onChange={(e)=>(setText(e.target.value))}
                ></textarea>
                <span></span>
              </div>
              <div>
                {/* <label htmlFor=""></label> */}
                <span>Send me promotions to my email</span>
                <input type="checkbox" 
                checked={emailinfo} 
                onChange={handleEmail}
                />
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
