import "./Product.css";
export default function Product({count,image,title,price,description}) {
  
    // return (
    //   (count)&& 
    //   <div className="productCard">
    //     <div className="card">
    //       <img src={image} alt="product"></img>
    //       <h1>{title}</h1>
    //       <p className="price">${price}</p>
    //       <p className="details">{description}</p>
    //       <p>
    //         <button>Add To Card</button>
    //       </p>
    //     </div>
    //   </div>
    // ); 
// another way
  if(count){
    return (
      <div className="productCard">
        <div className="card">
          <img src={image} alt="product"></img>
          <h1>{title}</h1>
          <p className="price">${price}</p>
          <p className="details">{description}</p>
          <p>
            <button>Add To Card</button>
          </p>
        </div>
      </div>
    );
  }
  return null;

}
