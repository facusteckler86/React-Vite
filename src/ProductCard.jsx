import 'react';


export const ProductCard = ( title, description, price, image ) =>{
  return (
    <div className="productCard">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
};

export default ProductCard;