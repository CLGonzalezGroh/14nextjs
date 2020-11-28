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

  return <div>{avo.name}</div>;
};

export default ProductItem;
