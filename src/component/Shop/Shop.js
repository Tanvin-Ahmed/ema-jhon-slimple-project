import React, { useState } from "react";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Summary from "../Summary/Summary";
import "./Shop.css"
const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [summary, setSummary] = useState([]);
  const handleAddProduct = (product) => {
      console.log('product add', product);
      const newSummary = [...summary, product];
      setSummary(newSummary);
  }
  return (
    <section className="interface">
      <div className="show-product">
        {products.map((product) => (
          <Product key={product.key} product={product}  handleAddProduct={handleAddProduct}></Product>
        ))}
      </div>
      <div>
            <Summary summary={summary}></Summary>
      </div>
    </section>
  );
};

export default Shop;
