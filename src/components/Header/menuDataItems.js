export const menuDataItems = [
    {
        name: "Explore our Zoo",
        to: "/explore-zoo",
        conditionality: "menuExploreZoo",
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
        submenu: [
            { name: "Food and Shopping", to: "/food-shopping" },
            { name: "Park Accessibility", to: "/park-accessibility" },
            { name: "How to Find us", to: "/find-us" },
        ],
    },
    { name: "Events", to: "/events", conditionality: "menuEvents" },
    {
        name: "Education and Learning",
        to: "/education-learn",
        conditionality: "menuEducationLearn",
        submenu: [
            {name: "Cip", to: "/cip"}
        ],
    },
    { name: "About us", to: "/about-us", conditionality: "menuAboutUs" },
    { name: "Contact us", to: "/contact-us", conditionality: "menuContactUs" },

]