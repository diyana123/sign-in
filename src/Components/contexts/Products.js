import { createContext, useState } from "react";
import PRODUCTS from "../../shop-data.json";
import ProductCard from "../productCard/ProductCard";

export const ProductsContext = createContext({
  product: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <>
      {/* {console.log("products are", value)}
      {console.log("children are", children)} */}
      <ProductsContext.Provider value={value}>
        {children}
      </ProductsContext.Provider>
    </>
  );
};
