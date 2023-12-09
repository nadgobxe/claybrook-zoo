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

export default function Root() {
    return (
        <Routes>
            <Route element={<BuyTickets />}></Route>
            <Route element={<Login />}></Route>
            <Route element={<Search />}></Route>
            <Route element={<AboutUs />}></Route>
            <Route element={<ContactUs />}></Route>
            <Route element={<EduAndLearn />}></Route>
            <Route element={<Events />}></Route>
            <Route element={<ExploreZoo />}></Route>
            <Route element={<PlanVisit />}></Route>
        </Routes>
    )
}