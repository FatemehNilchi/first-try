import "./Product.css";

function Product() {
  return (
    <div>
      <h2>Product Card</h2>
      <div className="card">
        <img src="samsung.jpg" alt="product"></img>
        <h1>Samsung Note 20</h1>
        <p className="price">$300</p>
        <p>
          It is the best smart phone It is the best smart phone It is the best
          smart phone
        </p>
        <p>
          <button>Add To Card</button>
        </p>
      </div>
    </div>
  );
}

export default Product;
