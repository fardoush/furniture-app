import ProductCard from "../ProductCard/ProductCard";

const Products = ({ products }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ">
      {products.slice(0, 12).map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
