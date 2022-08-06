/*
var ServiceBlockUrl1 = "https://assets.codepen.io/6060109/agency-service-1.png";
var ServiceBlockUrl2 = "https://assets.codepen.io/6060109/agency-service-2.png";
var ServiceBlockUrl3 = "https://assets.codepen.io/6060109/agency-service-3.png";

export default function ServicesSection() {
  return (
    <div className="ServicesSection">
      <h2>Our services</h2>
      <div className="ServiceBlocks">
        <div className="ServiceBlock">
          <img src={ServiceBlockUrl1} alt="" />
          <h5>Web Design</h5>
        </div>
        <div className="ServiceBlock">
          <img src={ServiceBlockUrl2} alt="" />
          <h5>Ecommerce</h5>
        </div>
        <div className="ServiceBlock">
          <img src={ServiceBlockUrl3} alt="" />
          <h5>Automation</h5>
        </div>
      </div>
    </div>
  );
}
*/
import ServiceBlock from "./ServiceBlock";
const SERVICE_BLOCK_DATA = [
  {
    imgURL: "https://assets.codepen.io/6060109/agency-service-1.png",
    title: "Web Design"
  },
  {
    imgURL: "https://assets.codepen.io/6060109/agency-service-2.png",
    title: "Ecommerce"
  },
  {
    imgURL: "https://assets.codepen.io/6060109/agency-service-3.png",
    title: "Automation"
  }
];

// Using map() function
/*
export default function ServicesSection() {
  return (
    <div className="ServicesSection">
      <h2>Our services</h2>
      <div className="ServiceBlocks">
        {SERVICE_BLOCK_DATA.map((block) => {
          return (
            <div className="ServiceBlock">
              <img src={block.imgURL} alt="" />
              <h5>{block.title}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
*/
// Using REACT props
export default function ServicesSection() {
  return (
    <div className="ServicesSection">
      <h2>Our services</h2>
      <div className="ServiceBlocks">
        {SERVICE_BLOCK_DATA.map((block) => {
          return <ServiceBlock block={block} />;
        })}
      </div>
    </div>
  );
}
