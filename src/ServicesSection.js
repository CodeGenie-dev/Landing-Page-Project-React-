var ServiceBlockUrl1 = "https://assets.codepen.io/6060109/agency-service-1.png";
var ServiceBlockUrl2 = "https://assets.codepen.io/6060109/agency-service-2.png";
var ServiceBlockUrl3 = "https://assets.codepen.io/6060109/agency-service-3.png";

export default function ServicesSection() {
  return (
    <div className="ServicesSection">
      <h2>OUR SERVICES</h2>
      <div className="ServiceBlocks">
        <div>
          <img src={ServiceBlockUrl1} />
          <h5>WEB DESIGN</h5>
        </div>
        <div>
          <img src={ServiceBlockUrl2} />
          <h5>ECOMMERCE</h5>
        </div>
        <div>
          <img src={ServiceBlockUrl3} />
          <h5>AUTOMATION</h5>
        </div>
      </div>
    </div>
  );
}
