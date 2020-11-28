import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();

  const [avo, SetAvo] = useState([]);

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((response) => response.json())
        .then((avo) => {
          SetAvo(avo);
        });
    }
  }, [id]);

  return (
    <div>
      <img src={avo.image}></img>
      <h2>{avo.name}</h2>
      <p>{avo.attributes.description}</p>
      <style jsx>
        {`
          h2 {
            color: brown;
          }
        `}
      </style>
    </div>
  );
};

export default ProductItem;
