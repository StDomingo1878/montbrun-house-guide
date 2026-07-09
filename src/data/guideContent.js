import { welcomeContent } from "../content/welcome";
import { keyInfoContent } from "../content/keyInfo";
import { beforeTravelContent } from "../content/beforeTravel";
import { arrivingContent } from "../content/arriving";
import { insideHouseContent } from "../content/insideHouse";
import { outsideHouseContent } from "../content/outsideHouse";
import { housekeepingContent } from "../content/housekeeping";
import { beforeLeaveContent } from "../content/beforeLeave";
import { emergenciesContent } from "../content/emergencies";
export const sectionGroups = [
  {
    id: "your-stay",
    title: "Your Stay",
    icon: "🏡",
    subtitle: "Everything you need to settle in and enjoy the house.",
    sections: [
      {
        id: "welcome",
        icon: "🏡",
        title: "Welcome to Montbrun",
        subtitle: "Start here and get to know Montbrun.",
        items: welcomeContent,
      },      
      {
        id: "key-info",
        icon: "🔑",
        title: "Key Info at a Glance",
        subtitle: "Essential information",
        items: keyInfoContent,
      },
      {
        id: "before-travel",
        icon: "✈️",
        title: "Before You Travel",
        subtitle: "Flights, car hire, parking and weather",
        items: beforeTravelContent,
      },
      { 
        id: "arriving", 
        icon: "🚗", 
        title: "Arriving", 
        subtitle: "Finding the house, parking, key safe, hot water and shutters", 
        items: arrivingContent, 
      },
      {
        id: "inside-house",
        icon: "🏡",
        title: "Inside the House",
        subtitle: "Kitchen, sofa bed, air conditioning and practical bits",
        items: insideHouseContent,
      },
      {
        id: "outside-house",
        icon: "🌿",
        title: "Outside the House",
        subtitle: "Pool, garden, outdoor cooking and terrace living",
        items: outsideHouseContent
      },

      {
        id: "housekeeping",
        icon: "🧹",
        title: "Housekeeping",
        subtitle: "Looking after the house during your stay",
        items: housekeepingContent
      },
    ],
  },
  {
    id: "explore",
    title: "Explore",
    icon: "🧭",
    subtitle: "Our favourite places around the Corbières and Mediterranean coast.",
    sections: [
      { id: "area", icon: "📍", title: "The Area", subtitle: "Montbrun, local rhythm and French opening hours", items: [] },
      { id: "groceries", icon: "🛒", title: "Groceries & Amenities", subtitle: "Essentials, supermarkets, bakeries, fuel, pharmacy and cash", items: [] },
      { id: "markets", icon: "🧺", title: "Markets", subtitle: "Narbonne, Lézignan, local markets and market tips", items: [] },
      { id: "restaurants", icon: "🍽️", title: "Restaurants & Cafés", subtitle: "Local meals, crêpes, seafood, coffee and special meals", items: [] },
      { id: "wine", icon: "🍷", title: "Wine", subtitle: "Vineyards, buying wine, Corbières, Minervois and BIB wine", items: [] },
      { id: "villages", icon: "🏘️", title: "Villages, Towns & Cities", subtitle: "Moux, Escales, Lézignan, Narbonne, Carcassonne and more", items: [] },
      { id: "beaches", icon: "🏖️", title: "Beaches", subtitle: "Gruissan, Narbonne Plage and Sérignan", items: [] },
      { id: "scenic-drives", icon: "🚙", title: "Scenic Drives", subtitle: "Vineyards, Black Mountains, coast roads and medieval villages", items: [] },
      { id: "walking", icon: "🥾", title: "Walking", subtitle: "Montbrun, Escales and the Black Mountains", items: [] },
      { id: "favourites", icon: "❤️", title: "Our Favourite Places", subtitle: "The places and rituals we love most", items: [] },
    ],
  },
  {
    id: "leaving",
    title: "Before You Leave",
    icon: "👋",
    subtitle: "Final checklist before heading home.",
    sections: [
      { 
        id: "before-leave",
        icon: "✅",
        title: "Before You Leave",
        subtitle: "A simple checklist before heading home",
        items: beforeLeaveContent
},
    ],
  },
  {
    id: "help",
    title: "Help",
    icon: "🆘",
    subtitle: "Emergency contacts and practical help.",
    sections: [
      { 
        id: "emergencies", icon: "☎️", title: "Emergencies", subtitle: "Emergency services, medical assistance, house contacts and utilities", items: emergenciesContent },
    ],
  },
];