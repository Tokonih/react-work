import { useState, useEffect } from "react";
import Navigation from "../Component/Navigation";
import { Link } from "react-router-dom";
// import img from "../Component/img/grass 2.jpg";
function Menu() {
  const [food, setFood] = useState([]);
  const foodCatArr = [
    "bbqs",
    "best-foods",
    "breads",
    "burgers",
    "chocolates",
    "desert",
    "fried-chicken",
    "ice-cream",
    "pizzas",
    "porks",
    "sandwitches",
    "sausage",
    "steaks",
  ];
  // const getData = () => {
  //   fetch("https://free-food-menus-api-production.up.railway.app/our-foods")
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setFood(data);
  //       console.log(data);
  //     });
  // };



  const getCategory = (cat) => {
    fetch(`https://free-food-menus-api-production.up.railway.app/${cat}`)
      .then((resp) => resp.json())
      .then((category) => {
        const foorArr = category.map((food) => {
          return {...food, category:cat}
        })
        setFood(foorArr);
      });
  };

    // const rating = () => {
    //   const foodRate = [];
    //   const rateCal = Math.floor(data.rate);

    //   for (let i = 0; i < 5; i++) {
    //     if (i < rateCal) {
    //       foodRate.push(
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="16"
    //           height="16"
    //           fill="yellow"
    //           class="bi bi-star-fill"
    //           viewBox="0 0 16 16"
    //         >
    //           <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    //         </svg>
    //       );
    //     }
    //   }
    //   return <div>{foodRate}</div>;
    // };
    const rating = (num) => "⭐".repeat(num)

  useEffect(() => {
    getCategory("best-foods");
  }, []);


  return (
    <div className="Menu-page">
      <Navigation />
      <div className="menuPage">
        <div>
          <h1>Menu</h1>
        </div>
        <div className="menu">
          <div className="menu-side-bar">
            {foodCatArr.map((foods, i) => {
              return (
                <button key={i} onClick={() => getCategory(foods)}>
                  {foods}
                </button>
              );
            })}
          </div>
          <div className="food-details">
            {food &&
              food.map((data, i) => (
                <Link
                  to={`/menu/category/${food.category}/${data.id}`}
                  className="Food"
                  key={i}
                >
                  <img src={data.img} alt="" />
                  <h3>{data.name}</h3>
                  <h4>{data.dsc}</h4>
                  <h4>₦{data.price}</h4>
                  {/* <p>{foodRate}</p> */}
                  <h4>{rating(data.rate)}</h4>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
