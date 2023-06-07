import img from "./img/grass wall.jpg";
import "./Section1.css";
function Section1() {
  return (
    <div className="Approach">
      <div className="app">
        <h1>Our Approach</h1>
        <h3>
          DESIGNING OUR EASYIVY PANELS TO THE HIGHEST STANDARDS IN OUR OWN
          FACILITY
        </h3>
        <p>
          EASYIVY is the only South African foliage brand that uses UV blocking
          technology with strong colourfast pigments to create inherently fade
          resistant foliage for outdoor use. Our products 100% maintenance free
          and fade resistant
        </p>
        <button>SEE OUR PROJECTS</button>
      </div>
      <div className="grass-image">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Section1;
