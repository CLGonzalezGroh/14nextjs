import React, { useState, useEffect } from "react";
import Link from "next/link";

// STATIC GENERATION
export const getStaticProps = async () => {
  const response = await fetch("https://14nextjs.vercel.app/api/avo");
  const { data } = await response.json();
  return {
    props: {
      productList: data,
    },
  };
};
// SERVER SIDE RENDERED
// export const getServerSideProps = async () => {
//   const response = await fetch("https://14nextjs.vercel.app/api/avo");
//   const { data } = await response.json();
//   return {
//     props: {
//       productList: data,
//     },
//   };
// };

const HomePage = ({ productList }) => {
  // CLIENT SIDE RENDERED
  // const [productList, SetProductList] = useState([]);

  // useEffect(() => {
  //   fetch("api/avo")
  //     .then((response) => response.json())
  //     .then(({ data, length }) => {
  //       SetProductList(data);
  //     });
  // }, []);

  return (
    <div className="container">
      {productList.map((product) => (
        <div key={product.id} className="card">
          <Link href={`/product/${product.id}`}>
            <a>
              <img src={product.image}></img>
              <h2>{product.name}</h2>
            </a>
          </Link>
        </div>
      ))}
      <style jsx>
        {`
          .container {
            display: flex;
            flex-wrap: nowrap;
          }
          .card {
            width: 400px;
            height: 400px;
            border: 1px solid red;
            display: block;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
