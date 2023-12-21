import React, {useState} from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react"
import {animalDataItems} from "../components/Animals/animalDataItems"
import { NavLink } from "react-router-dom";


export default function Search() {

  const [searchInput, setSearchInput] = useState("")

  const onChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value)
  }


  const filterAnimal = animalDataItems.filter(
    animal => {
      return (
        animal.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
  )

  return (
    <>
    <div className="flex flex-row gap-2">
    <Input className="irregular-border-radius shantell w-4/5" type="text" placeholder="search" onChange={onChange} />
    <NavLink to="/search-results" filterAnimal={filterAnimal}>
    <Button className="irregular-border-radius shantell bg-transparent border hover:bg-green-100" size="icon">
      <ChevronRight className="h-5 w-5 text-black" />
    </Button>
    </NavLink>
    </div>
    </>
  );
}
