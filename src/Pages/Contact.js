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
  const [err, setErr] = useState(false) 

  const handleEmail = (e) =>{
    e.preventDefault()
    e.target.checked ? setEmailnfo (true) : setEmailnfo (false)
    // console(setEmailINfo)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (fname === "" || lname ==="" || phone ==="" || email ==="" || text === ""){
      setErr(true)
      return
    }
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
                {err=== true && fname === "" ? <span> First name required</span> : null}
                
              </div>
              <div>
                <label htmlFor=""> Last Name</label>
                <input type="text"
                value={lname}
                onChange={(e)=>(setLname(e.target.value))}
                />
                  {err=== true && lname === "" ? <span> last name required</span> : null}

              </div>
              <div>
                <label htmlFor="">Phone</label>
                <input type="text" 
                value={phone}
                onChange={(e)=>(setPhone(e.target.value))}
                />
                {err=== true && phone === "" ? <span>Phone number is required</span> : null}
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="text"
                value={email}
                onChange={(e)=>(setEmail(e.target.value))}
                />
               {err=== true && email === ""?  <span>Email is required</span>: null}
              </div>
              <div>
                <label htmlFor=""></label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Leave a brief note"
                value={text}
                onChange={(e)=>(setText(e.target.value))}
                ></textarea>
                {err === true && text === ""?  <span>Message is reqiured</span> : null}
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
