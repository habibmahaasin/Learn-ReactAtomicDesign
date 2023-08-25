import CardProduct from "../components/Fragments/CardProduct";
import PagesLayout from "../components/Layouts/PagesLayout";

const products = [
    {
        id : 1,
        title : "Product 1",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat",
        price : "$999"
    },
    {
        id : 2,
        title : "Product 2",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat",
        price : "$999"
    }
]

const ProductPage = () => {
  return (
    <PagesLayout>
        <div className="flex justify-center gap-2 overflow-x-auto">
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header title={product.title} />
                    <CardProduct.Body>{product.desc}</CardProduct.Body>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>
            ))}
        </div>
    </PagesLayout>
  );
};

export default ProductPage;
