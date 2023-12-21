import { useEffect, useState } from "react";
// import AddUser from "../addUser/AddUser";
import CatCard from "../catCard/CatCard";
import Search from "../search/Search";
import CatImg from "../catImg/CatImg";

const App = () =>{
  const [search, setSearch] = useState("");
  const [breeds, setBreeds] = useState([]);

  useEffect(()=>{
    if(search){
      console.log(search)
      try{
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${search}`)
        .then(response=>response.json())
        .then(data=>{console.log(data)
          setBreeds(data)})
        
      }catch(msg){
        console.log(msg)
      }
    }
}, [search])

const handleSearch = (e) =>{
  setSearch(e.target.value)
}
  return(
    <div className="container">
      <h1>App komponentas</h1>
      <Search onSearch={handleSearch} val={search}/>
      {breeds.map((breed)=>
        {
          return <CatImg key={breed.id} URL={breed.url}/>}
        )}
    </div>
  )
}

export default App;
