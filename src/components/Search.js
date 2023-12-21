import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react"



export default function Search() {
  return (
    <>
    <div className="flex flex-row gap-2">
    <Input className="irregular-border-radius shantell w-4/5" type="text" placeholder="search" />
    <Button className="irregular-border-radius shantell bg-transparent border" size="icon">
      <ChevronRight className="h-5 w-5 text-black" />
    </Button>
    </div>
    </>
  );
}
