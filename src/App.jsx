import Card from "./components/Card";
import Navbar from "./components/Navbar"
import React, { useEffect, useState } from 'react'


function App() {
  const APP_ID = "c9d15527";
  //c033943e66352ed93fdcbc949f3581a3	

const APP_KEY = "ba745b7a985eeaaf3f4cf283b393096f";
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState(null);
useEffect(() => {
	getRecipes();
}, [query])
const getRecipes = async () => {
	const response = await fetch
		(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
	const data = await response.json();
	setRecipes(data.hits);
	 console.log(data);

};
const getSearch = e => {
	e.preventDefault();
	setQuery(search);
	setSearch("");
}


  const updateSearch=(e)=>{
    setSearch(e.target.value);
  }
  

  return (
    <div className="App  r mx-auto items-center">
     <Navbar/>
     <form className="my-7 flex flex-row gap-1 ml-[850px]" onSubmit={getSearch}>
     <input
            type="search"
            name="serch"
            placeholder="Search Product"
            class="border-4 h-10 px-10 pr-10  text-sm focus:outline-none "
            onChange={updateSearch}
          />
      <button type="sumbit" className="text-white bg-primary hover:bg-black p-1">Search</button>
     </form>
     <div >
		{recipes.map(recipe => (
		<Card
			key={recipe.recipe.label}
			title={recipe.recipe.label}
			calories={recipe.recipe.calories}
			image={recipe.recipe.image}
			ingredients={recipe.recipe.ingredients}
		/>

		))}
	</div>
     
   

    </div>
  )
}

export default App
