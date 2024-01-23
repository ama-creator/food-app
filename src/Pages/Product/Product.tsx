import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Product } from "../../interfaces/product.interface";

const Product = () => {
  const data = useLoaderData() as { data: Product };

  return (
    <>
      <Suspense fallback={"Loading product info"}>
        <Await resolve={data.data}>
          {({ data }: { data: Product }) => <div>Product - {data.name}</div>}
        </Await>
      </Suspense>
    </>
  );
};

export default Product;
