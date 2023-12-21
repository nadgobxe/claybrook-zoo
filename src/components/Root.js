import React from "react";
import { Route, Routes } from "react-router-dom";
import BuyTickets from "./BuyTickets";
import Login from "./Login";
import Search from "./Search";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import EduAndLearn from "../pages/EduAndLearn";
import Events from "../pages/Event";
import ExploreZoo from "../pages/ExploreZoo";
import PlanVisit from "../pages/PlanVisit";
import Home from "../pages/Home";
import SearchResult from "./SearchResult/SearchResults";

export default function Root() {
    return (
        <Routes>
            <Route element={<Home />} path="/"></Route>
            <Route element={<BuyTickets />} path="/buy-tickets"></Route>
            <Route element={<Login />} path="/login"></Route>
            <Route element={<Search />} path="/search"></Route>
            <Route element={<AboutUs />} path="/about-us"></Route>
            <Route element={<ContactUs />} path="/contact-us"></Route>
            <Route element={<EduAndLearn />} path="/education-learn"></Route>
            <Route element={<Events />} path="/events"></Route>
            <Route element={<ExploreZoo />} path="/explore-zoo"></Route>
            <Route element={<PlanVisit />} path="/plan-visit"></Route>
            <Route element={<SearchResult />} path="/search-results"></Route>
        </Routes>
    )
}