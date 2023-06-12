import { useState, useEffect } from "react"
// import Userinfo from "./Pages/userInfo";


function Userinfo(){
   
    const [user, setuser] = useState()

    useEffect(() => {
        fetch('http://localhost:8000/userData')
        .then(resp =>{
          return resp.json()
        })
        .then(data => {
            console.log(data)
           setuser(data)
        });
    }, []);
    return(
        <div>
           
        </div> 
    )
}
export default Userinfo