import { useState, useEffect } from "react";
import Navigation from "../Component/Navigation";
import img from "../Component/img/grass 2.jpg";
function Menu() {

    const [food, setFood] = useState([])
    const getData = () => {
        fetch(
          "https://free-food-menus-api-production.up.railway.app/our-foods"
        ).then((resp) => resp.json())
            .then((data) => {
                setFood(data)
                console.log(data)
        } )
    }

    useEffect(() => {
      getData()
  }, []);

  return (
    <div className="Menu-page">
      <Navigation />
      <h1>Menu</h1>
      <div className="menu">
        <div className="menu-side-bar">
          <h1>Side bar</h1>
        </div>
        <div className="food-details">
          {food &&
            food.map((data, i) => (
              <div className="Food" key={i}>
                <img src={data.img} alt="" />
                <h3>{data.name}</h3>
                <h4>{data.dsc}</h4>
                <h4>{data.price}</h4>
                <h4>{data.rate}</h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Menu;
