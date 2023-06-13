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
            {/* <div>{data}</div> */}
            {data && <div>{data.title.body}</div>}
           
        </div>
    )
}

export default Post;