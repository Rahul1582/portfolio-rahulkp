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

import Dashboard from "./views/dashboard/dashboard";

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
    component: Dashboard
  },
  {
    name: "About",
    path: "/about",
    icon: <Icon as={MdPersonPin} width="20px" height="20px" color="inherit" />
    // component: NFTMarketplace,
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
