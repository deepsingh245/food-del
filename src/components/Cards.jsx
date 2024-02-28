"use client";

import { Card, Dropdown } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
// import Image from 'next/image';

function Cards(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.foodItems;
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const handleAddToCart = async () => {
    await dispatch({
      type: "ADD",
      id: foodItem.id,
      name: foodItem.name,
      price: finalprice,
      qty: qty,
      size: size,
    });
    console.log(data)
  };
  let finalprice = qty * parseInt(options[size]);
useEffect(()=>{
  setSize(priceRef.current.value)
})

  return (
    <Card className="max-w-sm bg-gray-500 rounded-xl m-6 w-52 h-74">
      <div className="flex flex-col items-center">
        <img src={foodItem.img} style={{ aspectRatio: "4/3" }} />
        <h5 className="mb-4 mt-2 w-max text-xl font-medium text-gray-900 dark:text-white">
          {foodItem.name}
        </h5>
        {/* <span className="text-sm text-gray-900 dark:text-gray-900">Visual Designer</span> */}
        <div className="dropdown flex items-center justify-between">
          <div className="dropdown1 mx-1">
            {/* <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
            <select onChange={(e)=>{setQty(e.target.value)}} className="bg-cyan-700 text-gray-100 text-sm font-semibold rounded-lg focus:ring-cyan-400 focus:border-cyan-500 block w-fit p-2.5 hover:bg-cyan-900 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="dropdown2 mx-1">
            <select ref={priceRef} className="bg-cyan-700 text-gray-100 text-sm font-semibold rounded-lg focus:ring-cyan-400 focus:border-cyan-500 block w-fit p-2.5 hover:bg-cyan-900 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="cart ">
          <div className="price m-2 font-bold text-lg text-center">
            Rs {finalprice}/-
          </div>
          <hr></hr>
          <button onClick={handleAddToCart} className="addcart  m-2 p-2 bg-cyan-700 rounded-md ">
            Add to Cart
          </button>
        </div>
      </div>
    </Card>
  );
}

export default Cards;
