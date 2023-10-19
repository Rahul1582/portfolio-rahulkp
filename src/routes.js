import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdDashboard,
  MdBarChart,
  MdPersonPin,
  MdCode,
  MdContacts
} from "react-icons/md";

import Dashboard from "./views/dashboard/dashboard";
import About from "./views/about/about";
import Resume from "./views/resume/resume";
import Projects from "./views/projects/projects";
import Contact from "./views/contact/contact";

const routes = [
  {
    name: "Home",
    path: "/home",
    navbarDisplayName: "<Home/>",
    icon: <Icon as={MdDashboard} width="30px" height="30px" color="inherit" />,
    component: Dashboard
  },
  {
    name: "About Me",
    path: "/about",
    navbarDisplayName: "<About Me/>",
    icon: <Icon as={MdPersonPin} width="30px" height="30px" color="inherit" />,
    component: About
  },
  {
    name: "Projects And Blogs",
    path: "/projects",
    navbarDisplayName: "<Projects And Blogs/>",
    icon: <Icon as={MdCode} width="30px" height="30px" color="inherit" />,
    component: Projects
  },
  {
    name: "Resume",
    path: "/resume",
    navbarDisplayName: "<Resume/>",
    icon: <Icon as={MdBarChart} width="30px" height="30px" color="inherit" />,
    component: Resume
  },
  {
    name: "Contact Me",
    path: "/contact",
    navbarDisplayName: "<Contact/>",
    icon: <Icon as={MdContacts} width="30px" height="30px" color="inherit" />,
    component: Contact
  }
];

export default routes;
