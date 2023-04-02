import "./Product.css";

export default function Product(props) {
  return (
    <div className="productCard">
      <div className="card">
        <img src={props.image} alt="product"></img>
        <h1>{props.title}</h1>
        <p className="price">${props.price}</p>
        <p className="details">{props.description}</p>
        <p>
          <button>Add To Card</button>
        </p>
      </div>
    </div>
  );
}
