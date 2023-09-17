import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdDashboard,
  MdBarChart,
  MdPerson,
  MdHome,
  MdPersonPin,
  MdCode,
  MdContacts
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    path: "/home",
    icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />
    // component: MainDashboard
  },
  {
    name: "About",
    path: "/about",
    icon: <Icon as={MdPersonPin} width="20px" height="20px" color="inherit" />,
    // component: NFTMarketplace,
    secondary: true
  },
  {
    name: "Resume",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/resume"
    // component: DataTables
  },
  {
    name: "Projects And Blogs",
    path: "/projects",
    icon: <Icon as={MdCode} width="20px" height="20px" color="inherit" />
    // component: Profile
  },
  {
    name: "Hobbies",
    path: "/hobbies",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />
    // component: Profile
  },
  {
    name: "Contact Me",
    path: "/contact",
    icon: <Icon as={MdContacts} width="20px" height="20px" color="inherit" />
    // component: Profile
  }
];

export default routes;
