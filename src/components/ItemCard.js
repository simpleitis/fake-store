import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ItemCard(props) {
  return (
    //
    <div className=" rounded overflow-hidden shadow-md bg-white col-span-1 sm:col-span-1 lg:col-span-2 2xl:col-span-2">
      <Link to={`/product/${props.product.id}`}>
        <div className="flex flex-col">
          <center>
            <img
              className="object-contain h-48 w-96 p-2"
              src={props.product.image}
              alt="Sunset in the mountains"
            />
          </center>
          <center>
            <div className="px-6 py-4 font-semibold mb-2 text-slate-600">
              {props.product.title.slice(0, 20) + '...'}
            </div>
          </center>
        </div>
        <div>
          <center>
            <p className="font-bold pb-2">${props.product.price}</p>
          </center>
        </div>
      </Link>
    </div>
  );
}

export default ItemCard;
