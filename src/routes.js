import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdOutlineShoppingCart
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />
    // component: MainDashboard
  },
  {
    name: "About",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    // component: NFTMarketplace,
    secondary: true
  },
  {
    name: "Resume",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/data-tables"
    // component: DataTables
  },
  {
    name: "Projects And Blogs",
    layout: "/admin",
    path: "/profile3",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />
    // component: Profile
  },
  {
    name: "Hobbies",
    layout: "/admin",
    path: "/profile1",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />
    // component: Profile
  },
  {
    name: "Contact Me",
    layout: "/admin",
    path: "/profile2",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />
    // component: Profile
  }
];

export default routes;
