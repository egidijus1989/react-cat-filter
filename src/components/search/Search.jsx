import SearchOption from "../searchOption/SearchOption";
import { useState, useEffect } from "react";
const Search = ({onSearch, val, ...props}) =>{
    const [breeds, setBreeds] = useState([]);
    useEffect(()=>{
          try{
            fetch(`https://api.thecatapi.com/v1/breeds`)
            .then(response=>response.json())
            .then(data=>setBreeds(data))
          }catch(msg){
            console.log(msg)
          }
      }, [])
    return(
        <>
            <label htmlFor="exampleDataList" className="form-label">Cat breed searcher</label>
            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." onChange={onSearch}/>
            <datalist id="datalistOptions">
                {breeds.map((breed)=>
                    <SearchOption key = {breed.id} id={breed.id} name={breed.name}/>
                )}
            </datalist>
        </>
    )
}
export default Search;