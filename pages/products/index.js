"use client"; 
import React from 'react';
import { useRouter } from 'next/router';

function Products({ products }) {
  const router = useRouter();

  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  const detailView = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'inline' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{ display: 'inline-block', marginRight: '1rem', cursor: 'pointer' }}
            onClick={() => detailView(product.id)}
          >
            <img src={product.image} alt={product.title} width={200} />
            <h2 style={{ wordWrap: 'break-word' }}>{truncateString(product.title, 20)}</h2>
            <h3>{product.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return { props: { products } };
}

export default Products;
