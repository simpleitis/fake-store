import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setProductData(data[id - 1]);
  }, [data]);

  return (
    <div className="flex flex-wrap justify-between sm:justify-evenly pt-10">
      <img
        className="object-contain h-56 w-96 xl:h-full sm:w-100 p-2"
        src={productData?.image}
      />
      <div className="p-5">
        <p className="font-extrabold py-5">{productData?.title}</p>
        <p className="max-w-xl font-medium text-slate-400 ">
          {productData?.description}
        </p>
        <p className="font-extrabold text-2xl py-10">${productData?.price}</p>
        <div className="flex justify-evenly">
          <p className="font-bold text-green-700">
            Rating:{productData?.rating?.rate}
          </p>
          <p className="font-bold text-blue-500">
            Count:{productData?.rating?.count}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
