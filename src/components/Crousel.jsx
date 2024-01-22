
'use client';

import { Carousel } from 'flowbite-react';

function crousel() {
  return (
    <div className="crousel h-[500px] m-6">
      <Carousel slide={true} >
        <img className='imgs object-cover' src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1705771205~exp=1705771805~hmac=0c63f5d2dcb3865338bb2ec5cf8760f0d9b351ebc9ea0b510343d8651e9c889a" alt="Pizza" />
        <img className='imgs object-cover' src="https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg?w=740&t=st=1705771234~exp=1705771834~hmac=edcd3ead3ce328d7b6fae71779d492afb13350ee3806430be07fde56a5796708" alt="Sandwich" />
        <img className='imgs object-cover' src="https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?w=740&t=st=1705771256~exp=1705771856~hmac=192325e62b3e554c7932c882b8a7c76bd24efc50d54810dc09b8988feb08e3bb" alt="shawarma" />
        <img className='imgs object-cover' src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=996&t=st=1705771278~exp=1705771878~hmac=ab9304a5a5e110d1c407dfe09d715278154dd958552235b6b86a80311f604f0f" alt="chicken-skewers" />
        <img className='imgs object-cover' src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?w=996&t=st=1705771354~exp=1705771954~hmac=7c8b374a142206d645e663ef365443f7873ed1432286161de508c8063dec750e" alt="Pasta" />
      </Carousel>
    </div>
  );
}
export default crousel