import { useEffect, useState } from "react";
import Navigation from "../Component/Navigation";
import { useParams } from "react-router-dom";
function FoodDetails() {
  const { foodId } = useParams();
  console.log(useParams());
  const [singlefood, setSinglefood] = useState({});

  const getFood = () => {
    fetch(
      `https://free-food-menus-api-production.up.railway.app/our-foods/${foodId}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setSinglefood(data);
        console.log(data);
      });
  };

  const rating = () => {
    let foodRate = []
    let rateCal = Math.floor(singlefood.rate)

    for (let i = 0; i < 5; i++){
      if (i < rateCal) {
        foodRate.push(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="yellow"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        );
      }
    }
    return (<div>{ foodRate}</div>)
  }
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
        <p>{rating() }</p>
        <button>Order Now </button>
      </div>
    </div>
  );
}

export default FoodDetails;
