import CardProduct from "../components/Fragments/CardProduct";
import PagesLayout from "../components/Layouts/PagesLayout";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Product 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat",
    price: 1000,
  },
  {
    id: 2,
    title: "Product 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat",
    price: 500,
  },
  {
    id: 3,
    title: "Product 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat",
    price: 900,
  },
  {
    id: 4,
    title: "Product 4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat",
    price: 9000,
  },
];

const ProductPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };

  return (
    <PagesLayout>
      <div className="flex">
        <div className="w-1/2 flex flex-wrap justify-center gap-2 overflow-x-auto">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header title={product.title} />
              <CardProduct.Body>{product.desc}</CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                handleAddToCart={handleAddToCart}
                id={product.id}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/2">
          <h1 className="text-lg font-semibold underline underline-offset-1">
            Cart List
          </h1>
          <table className="mt-4 table-auto w-1/2 text-center border border-sky-500">
            <thead>
              <tr>
                <th>Produt Name</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>{item.qty}</td>
                    <td>{product.price * item.qty}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </PagesLayout>
  );
};

export default ProductPage;
