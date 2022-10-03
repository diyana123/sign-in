import SHOP_DATA from "../../shop-data.json";
import { ProductsContext } from "../../Components/contexts/Products";
import { useContext } from "react";
import ProductCard from "../../Components/productCard/ProductCard";
import "./ShopStyles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {/* {console.log(products)} */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
