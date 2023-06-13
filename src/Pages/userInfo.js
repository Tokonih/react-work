// import { useState, useEffect } from "react"
// import Userinfo from "./Pages/userInfo";
import Navigation from "../Component/Navigation"
import { useLocation } from "react-router-dom"


function Userinfo(){
    const resp = useLocation()
    const result =  resp.state;


    return(
        <div> 
            <Navigation/>
            <div>
                <div>
                    <h3>First Name </h3>
                    <p>{result.First_Name}</p>
                </div>

                <div>
                    <h3>Last Name </h3>
                    <p>{result.Last_Name}</p>
                </div>

                <div>
                    <h3>phone  </h3>
                    <p>{result.phone}</p>
                </div>

                <div>
                    <h3>Email </h3>
                    <p>{result.Email}</p>
                </div>

                <div>
                    <h3>First Name </h3>
                    <p>{result.Last_Name}</p>
                </div>

                <div>
                    <h3>Text </h3>
                    <p>{result.Text}</p>
                </div>
                
            </div>
        </div>
    )
    // const [user, setuser] = useState('');
    // const [fname, setFname] = useState('');
    // const [phone, setPhone] = useState('');
    // const [email, setEmail] = useState('');
    // const [text, setText] = useState('');

    // useEffect(() => {
    //     fetch('http://localhost:8000/userData')
    //     .then(resp =>{
    //       return resp.json()
    //     })
    //     .then(data => {
    //         console.log(data)
    //         // setuser(data)
    //         data.map((user=>{
    //             return(
                    
    //                 setFname(user.fname),
    //                 setPhone(user.phone),
    //                 setEmail(user.email),
    //                 setText(user.text)
    //             )
    //         }))
            
    //     });
    // }, []);
}
export default Userinfo