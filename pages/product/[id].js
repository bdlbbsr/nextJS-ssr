import React from 'react';

function Product({ product }) {
  // console.log("first", product);
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width={200} />
      <h3>{product.price}</h3>
      <p>{product.description}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return { props: { product } };
}

export default Product;
