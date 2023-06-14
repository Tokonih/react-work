import { useEffect, useState } from "react";
import Navigation from "../Component/Navigation";

function Post(){
    const [data, setData] = useState(null)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp=>{
        return resp.json()
        })
        .then(data=>{
            setData(data)
            console.log(data)
            // data.map((info =>{
            //     return info
            // }))
           
        })
        
        // setData(resp)
    },[])
    return(
        <div>
            <Navigation/>
           <div className="output">
             {/* <div>{data}</div> */}
             {data && data.map((info) => {
                return <div key={info.id} >
                          <div>
                          <h3>Title:  { info.title}</h3>
                          <p>Body: {info.body}</p>
                          </div>
                       </div>
            })}
           </div>
           
        </div>
    )
}

export default Post;