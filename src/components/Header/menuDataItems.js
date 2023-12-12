
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export const menuDataItems = [
    {
        name: "Explore our Zoo",
        to: "/explore-zoo",
        conditionality: "menuExploreZoo",
        icon:<FontAwesomeIcon icon={solid("binoculars")} beat size="1x1" />,
        submenu: [
            { name: "Exhibits", to: "/exhibits" },
            { name: "360 Tour", to: "/360-tour" },
            { name: "Animals", to: "/animals" },
            { name: "Membership Information", to: "/membership-info" },
            { name: "Education and Learning", to: "/education-learn" },
            { name: "Venue Hire", to: "/venue-hire" },
        ],
    },
    {
        name: "Plan your Visit",
        to: "/plan-visit",
        conditionality: "menuPlanVisit",
        icon:<FontAwesomeIcon icon={solid("map")} beat size="1x1" />,
        submenu: [
            { name: "Food and Shopping", to: "/food-shopping" },
            { name: "Park Accessibility", to: "/park-accessibility" },
            { name: "How to Find us", to: "/find-us" },
        ],
    },
    { name: "Events", to: "/events", conditionality: "menuEvents", icon:<FontAwesomeIcon icon={solid("calendar-days")} beat size="1x1" />, },
    {
        name: "Education and Learning",
        to: "/education-learn",
        conditionality: "menuEducationLearn",
        icon:<FontAwesomeIcon icon={solid("graduation-cap")} beat size="1x1" />, 
    },
    { name: "About us", to: "/about-us", conditionality: "menuAboutUs", icon:<FontAwesomeIcon icon={solid("address-card")} beat size="1x1" />, },
    { name: "Contact us", to: "/contact-us", conditionality: "menuContactUs", icon:<FontAwesomeIcon icon={solid("map-pin")} beat size="1x1" />, },

]