

export const animalDataItems = [
    {
        name: "Lowland Gorilla",
        to: "/explore-zoo",
        icon:"https://media.cnn.com/api/v1/images/stellar/prod/190726074321-01-trudy-gorilla-file.jpg?q=x_3,y_237,h_1684,w_2993,c_crop/h_653,w_1160/f_webp",
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
        icon:<FontAwesomeIcon icon={solid("map")} size="1x1" />,
        submenu: [
            { name: "Food and Shopping", to: "/food-shopping" },
            { name: "Park Accessibility", to: "/park-accessibility" },
            { name: "How to Find us", to: "/find-us" },
        ],
    }, 
]
