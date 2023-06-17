import { useEffect, useState } from "react";
import Navigation from "../Component/Navigation";
import { useParams } from "react-router-dom";
function FoodDetails() {
  const {category, foodId } = useParams();
  // console.log(useParams());
  const [singlefood, setSinglefood] = useState({});

  const getFood = () => {
    fetch(
      `https://free-food-menus-api-production.up.railway.app/${category}/${foodId}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setSinglefood(data);
        console.log(data);
      });
  };


  const rating = (num) => "⭐".repeat(num)

  useEffect(() => {
    getFood();
  }, []);

  return (
    <div>
      <Navigation />
      <div className="single-food-page">
        <h1>{foodId} </h1>
      </div>
      <div className="single-food">
        <img src={singlefood.img} alt="" />
        <h3>{singlefood.name}</h3>
        <p>{singlefood.dsc}</p>
        <h3>₦{singlefood.price}</h3>
        <p>{rating(singlefood.rate) }</p>
        <button>Order Now </button>
      </div>
    </div>
  );
}

export default FoodDetails;
