import img from "./img/grass 2.jpg";
import "./Section4.css";

function Section4() {
  return (
    <div>
      <div className="Approach2">
        <div className="grass-image2">
          <img src={img} alt="" />
        </div>
        <div className="Approach-2">
          <div>
            <h1>Our Advantages</h1>
            <h3>
              ARTIFICIAL FOLIAGE HAS ALL THE BEAUTY AND BENEFITS LIVING PLANTS,
              WITHOUT THE ONGOING UPKEEP AND MAINTENANCE.
            </h3>
            <p>
              EASYIVY is the perfect option for screening of unattractive
              features, such as air conditioners, or for unforgettable accent
              walls that might otherwise appear bland and unattractive.
            </p>
            <button>SEE OUR PROJECTS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
