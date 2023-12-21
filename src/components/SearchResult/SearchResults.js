import React from "react";
import { useLocation } from "react-router-dom";
import {animalDataItems} from "../Animals/animalDataItems";
import { NavLink } from "react-router-dom";

export default function SearchResult() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchInput = queryParams.get('query') || '';

    const filterAnimal = animalDataItems.filter(
        animal => {
          return (
            animal.name.toLowerCase().includes(searchInput.toLowerCase())
          );
        }
      )

    return     <>
    <div>Your search results:</div>
    {filterAnimal.map(animal => (
      <div key={animal.name}>Your animal is: <NavLink to={animal.to}>{animal.name}</NavLink> <img src={animal.img} alt={animal.name} width="100vw"/></div>
    ))}
  </>
}