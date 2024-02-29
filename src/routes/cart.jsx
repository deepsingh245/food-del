import React from 'react'
// import TrashIcon from '@material-ui/icons/TrashIcon'

import { useCart, useDispatchCart } from '../components/ContextReducer';
import { TrashIcon } from '@heroicons/react/24/outline';
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center font-bold '>The Cart is Empty!</div>
      </div>
    )
  }
  // const handleRemove = (index)=>{
  //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    // console.log(data,localStorage.getItem("userEmail"),new Date())
    let response = await fetch("http://localhost:3000/api/auth/orderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    console.log("JSON RESPONSE:::::", response.status)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div>
      <div className='relative overflow-x-auto m-4' >
        <table className='w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className=' text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className="px-6 py-3" >#</th>
              <th scope='col' className="px-6 py-3" >Name</th>
              <th scope='col' className="px-6 py-3" >Quantity</th>
              <th scope='col' className="px-6 py-3" >Option</th>
              <th scope='col' className="px-6 py-3" >Amount</th>
              <th scope='col' className="px-6 py-3" ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope='row' className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</th>
                <td className="px-6 py-4">{food.name}</td>
                <td className="px-6 py-4">{food.qty}</td>
                <td className="px-6 py-4"> {food.size}</td>
                <td className="px-6 py-4">{food.price}</td>
                <td className="px-6 py-4"><button type="button" className="btn p-0" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</button> </td></tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-white">
                <th scope="row" className="px-6 py-3 text-base">Total</th>
                <td className="px-6 py-3"></td>
                <td className="px-6 py-3">{totalPrice}</td>
            </tr>
        </tfoot>
        </table>
        <div><h1 className=''>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='p-2 bg-cyan-500' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>



    </div>
  )
}