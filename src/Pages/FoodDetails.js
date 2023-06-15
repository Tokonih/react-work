import { useEffect, useState } from "react";
import Navigation from "../Component/Navigation";
import { useParams } from "react-router-dom";
function FoodDetails() {
  const { foodId } = useParams();
  console.log(useParams());
  const [singlefood, setSinglefood] = useState({});

  const getFood = () => {
      fetch(`https://free-food-menus-api-production.up.railway.app/our-foods/${foodId}`)
          .then((resp) => resp.json())
          .then((data) => {
              setSinglefood(data)
              console.log(data)
      })
  }

  useEffect(() => {
      getFood()
  }, [])

  return (
    <div>
      <Navigation />
      <div className="Menu-page">
        <h1>{foodId} </h1>
      </div>
      <div>
        <img src={singlefood.img} alt="" />
        <h3>{singlefood.name}</h3>
        <p>{singlefood.dsc}</p>
        <h3>{singlefood.price}</h3>
      </div>
    </div>
  );
}

export default FoodDetails;
