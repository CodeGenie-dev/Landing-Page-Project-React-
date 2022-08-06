export default function ServiceBlock(props) {
  return (
    <div className="ServiceBlock">
      <img src={props.block.imgURL} alt="" />
      <h5>{props.block.title}</h5>
    </div>
  );
}
