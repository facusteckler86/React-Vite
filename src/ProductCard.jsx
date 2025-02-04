

function ProductCard ({ title, description, price, image, alt }){
    
    return (
        <div className="productCard">
            <img src={image} alt={alt} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};



export default ProductCard;