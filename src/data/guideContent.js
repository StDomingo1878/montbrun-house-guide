import { welcomeContent } from "../content/welcome";
import { keyInfoContent } from "../content/keyInfo";
import { beforeTravelContent } from "../content/beforeTravel";
import { arrivingContent } from "../content/arriving";
import { insideHouseContent } from "../content/insideHouse";
import { outsideHouseContent } from "../content/outsideHouse";
import { housekeepingContent } from "../content/housekeeping";
import { beforeLeaveContent } from "../content/beforeLeave";
import { emergenciesContent } from "../content/emergencies";
import { groceriesContent } from "../content/groceries";
import { areaContent } from "../content/area";
import { marketsContent } from "../content/markets";
import { restaurantsContent } from "../content/restaurants";
import { wineContent } from "../content/wine";
import { villagesContent } from "../content/villages";
import { beachesContent } from "../content/beaches";
import { scenicDrivesContent } from "../content/scenicDrives";
import { walkingContent } from "../content/walking";
import { favouritePlacesContent } from "../content/favouritePlaces";
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
        image: "images/welcome.jpg",
        items: welcomeContent,
      },      
      {
        id: "key-info",
        icon: "🔑",
        title: "Key Info at a Glance",
        subtitle: "Essential information",
          image: "images/info2.jpg",
        items: keyInfoContent,
      },
      {
        id: "before-travel",
        icon: "✈️",
        title: "Before You Travel",
        subtitle: "Flights, car hire, parking and weather",
          image: "images/before.jpg",
        items: beforeTravelContent,
      },
      { 
        id: "arriving", 
        icon: "🚗", 
        title: "Arriving", 
        subtitle: "Finding the house, parking, key safe, hot water and shutters", 
          image: "images/arriving.jpg",
        items: arrivingContent, 
      },
      {
        id: "inside-house",
        icon: "🏡",
        title: "Inside the House",
        subtitle: "Kitchen, sofa bed, air conditioning and practical bits",
          image: "images/inside.jpg",
        items: insideHouseContent,
      },
      {
        id: "outside-house",
        icon: "🌿",
        title: "Outside the House",
        subtitle: "Pool, garden, outdoor cooking and terrace living",
          image: "images/outside.jpg",
        items: outsideHouseContent
      },

      {
        id: "housekeeping",
        icon: "🧹",
        title: "Housekeeping",
        subtitle: "Looking after the house during your stay",
          image: "images/housekeeping.jpg",
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
      {
  id: "area",
  icon: "🌿",
  title: "The Area",
  subtitle: "Vineyards, villages, beaches and the rhythm of southern France",
    image: "images/area.jpg",
  items: areaContent
},
{
  id: "groceries",
  icon: "🛒",
  title: "Groceries",
  subtitle: "Supermarkets, bakeries, fuel, pharmacy and Sunday chicken",
    image: "images/bread.jpg",
  items: groceriesContent
},
{
  id: "markets",
  icon: "🧺",
  title: "Markets",
  subtitle: "Fresh food, local produce and morning market tips",
    image: "images/market.jpg",
  items: marketsContent
},
{
  id: "restaurants",
  icon: "🍽️",
  title: "Restaurants",
  subtitle: "Relaxed meals, crêpes, seafood and local favourites",
    image: "images/rest.jpg",
  items: restaurantsContent
},
{
  id: "wine",
  icon: "🍷",
  title: "Wine",
  subtitle: "Vineyards, tastings, Corbières, Minervois and BIB wine",
  image: "images/wine.jpg",
    image: "images/wine.jpg",
  items: wineContent
},
{
  id: "villages",
  icon: "🏘️",
  title: "Villages, Towns and Cities",
  subtitle: "Moux, Escales, Lézignan, Narbonne, Carcassonne and more",
    image: "images/beziers.jpg",
  items: villagesContent
},
{
  id: "beaches",
  icon: "🏖️",
  title: "Beaches",
  subtitle: "Mediterranean beach days within easy reach",
    image: "images/beach.jpg",
  items: beachesContent
},
{
  id: "scenic-drives",
  icon: "🚗",
  title: "Scenic Drives",
  subtitle: "Vineyards, mountains, coast roads and medieval villages",
    image: "images/scenic.jpg",
  items: scenicDrivesContent
},
{
  id: "walking",
  icon: "🚶",
  title: "Walking",
  subtitle: "Village strolls, vineyard walks and the Black Mountains",
    image: "images/area.jpg",
  items: walkingContent
},
{
  id: "favourite-places",
  icon: "❤️",
  title: "Favourite Places",
  subtitle: "The places we'd recommend above all others",
    image: "images/oyst.jpg",
  items: favouritePlacesContent
},
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
        image: "images/before.jpg",
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
        id: "emergencies", icon: "☎️", title: "Emergencies", subtitle: "Emergency services, medical assistance, house contacts and utilities",   image: "images/wine.jpg", items: emergenciesContent },
    ],
  },
];