import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// REQUIRED FOR DYNAMIC PAGES
export const getStaticPaths = async () => {
  const response = await fetch("https://14nextjs.vercel.app/api/avo");
  const { data } = await response.json();
  const paths = data.map((avo) => ({
    params: {
      id: avo.id,
    },
  }));

  return {
    paths,
    fallback: false, //404 if !id
  };
};

// STATIC GENERATION
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(`https://14nextjs.vercel.app/api/avo/${id}`);
  const avo = await response.json();
  return {
    props: {
      avo,
    },
  };
};

const ProductItem = ({ avo }) => {
  // CLIENT SIDE RENDERED
  // const {
  //   query: { id },
  // } = useRouter();

  // const [avo, SetAvo] = useState([]);

  // useEffect(() => {
  //   if (id) {
  //     fetch(`/api/avo/${id}`)
  //       .then((response) => response.json())
  //       .then((avo) => {
  //         SetAvo(avo);
  //       });
  //   }
  // }, [id]);

  return (
    <div>
      <img src={avo.image}></img>
      <h2>{avo.name}</h2>
      {avo.attributes && <p>${avo.attributes.description}</p>}
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
