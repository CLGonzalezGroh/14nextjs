import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [productList, SetProductList] = useState([]);

  useEffect(() => {
    window
      .fetch("api/avo")
      .then((response) => response.json())
      .then(({ data, length }) => {
        SetProductList(data);
      });
  }, []);

  return (
    <div>
      {productList.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
      <h1>Hello Next world!</h1>
    </div>
  );
};

export default HomePage;
