import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Crousel from "../components/Crousel";
import Cards from "../components/Cards";

function Home() {

  const [search, setSearch] = useState('')
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:3000/api/foodData/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: "All",
      }),
    });

    if (!response.ok) throw new Error("Could not get data");
    else {
      response = await response.json();
      // console.log("res 0 ",response[0],"res 1 ",response[1]);
      setItem(response[0]);
      setFoodCat(response[1]);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="h-full">
      <Navbar />
      <Crousel />
      <section className="w-screen h-16 flex justify-center items-center">
         
    <label htmlFor="default-search" className="mb-1 text-sm font-medium text-gray-900 sr-only dark:text-black">Search</label>
    <div className="relative flex flex-row-reverse items-center">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"  fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="search" name="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} className="block w-96 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
      </div>

      </section>
      <div className="container">
        {foodCat != [] ? (
          foodCat.map((data) => {
            return (<div className="row mb-3">
              <div key={data._id} className="name font-bold fs-7 m-3 mx-8">
                {data.CategoryName}
              </div>
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-2">
              {
                foodItem !=[] ? foodItem.filter((item)=>(item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                .map(filterItems =>{
                  return (
                    <div key={filterItems.key}>
                      <Cards foodItems = {filterItems}
                      options = {filterItems.options[0]}
                      ></Cards>
                    </div>
                  )
                }): <div></div>
              }
              </div>
              </div>
            );
          })
        ) : (
          <div className="some">singhfnkfnf</div>
        )}
        {/* <Cards /> */}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
