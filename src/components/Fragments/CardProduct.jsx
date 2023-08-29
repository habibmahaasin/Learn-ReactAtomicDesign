import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs border border-indigo-200 p-4 rounded-lg shadow">
        {children}
    </div>
  );
};

const Header = (props) => {
  const {title} = props
  return (
    <div>
      <img src="https://source.unsplash.com/random/800x600" alt="random" />
      <h2 className="text-lg text-left mt-2 font-semibold">{title}</h2>
    </div>
  );
};

const Body = (props) => {
  const { children } = props;
  return (
    <p className="mt-2 text-left text-gray-500">
      {children}
    </p>
  );
};

const Footer = (prop) => {
  const {price, handleAddToCart, id } = prop
  return (
    <div className="flex justify-between mt-4">
      <span className="font-semibold text-lg mt-1.5">${price}</span>
      <Button style="w-1/2 bg-blue-500" onClick={() => handleAddToCart(id)}>Buy</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
