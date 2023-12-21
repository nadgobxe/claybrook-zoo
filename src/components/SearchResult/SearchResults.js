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
<div className="mx-auto w-3/4">
<table class="table-auto">
  <thead>
    <tr>
      <th>Your search results:</th>
    </tr>
  </thead>
  <tbody>
  {filterAnimal.map(animal => (
    <tr key={animal.name}>
      <td> <NavLink to={animal.to} className="text-green-900">{animal.name}</NavLink></td>
      <td><img src={animal.img} alt={animal.name} width="100vw"/></td>
    </tr>
    ))}
  </tbody>
</table>
</div>
  </>
}