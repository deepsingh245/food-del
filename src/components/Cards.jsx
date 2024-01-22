
'use client';

import { Card, Dropdown } from 'flowbite-react';
// import Image from 'next/image';

function Cards() {
  return (
    <Card className="max-w-sm bg-gray-500 rounded-xl m-6">
      <div className="flex flex-col items-center pb-4 " >
        <img 
         src='https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=996&t=st=1705758013~exp=1705758613~hmac=b2036b4f013c24b02e4c1fb1c61ffa5480010e57e5fd4fae6bbf0d8897ef1b8b'/>
        <h5 className="mb-4 mt-2 text-xl font-medium text-gray-900 dark:text-white">Red Sause Pasta</h5>
        {/* <span className="text-sm text-gray-900 dark:text-gray-900">Visual Designer</span> */}
        <div className='dropdown flex items-center justify-between'>
          <div className='dropdown1 mx-1'>
          
{/* <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
<select id="countries" className="bg-cyan-700 text-gray-100 text-sm font-semibold rounded-lg focus:ring-cyan-400 focus:border-cyan-500 block w-full p-2.5 hover:bg-cyan-900 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option defaultValue>Item</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>

          </div>
    <div className='dropdown2 mx-1'>
    <select id="countries" className="bg-cyan-700 text-gray-100 text-sm font-semibold rounded-lg focus:ring-cyan-400 focus:border-cyan-500 block w-full p-2.5 hover:bg-cyan-900 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option defaultValue>Size</option>
  <option  value="1">Small</option>
  <option  value="2">Regular</option>
  <option  value="3">Large</option>
</select>
    </div>
    </div>
        
      </div>
    </Card>
  );
}


export default Cards