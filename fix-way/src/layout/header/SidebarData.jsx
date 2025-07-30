import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoPerson } from "react-icons/io5"; 

export const SidebarData = [
  {
    path: "/",
    nameKey: "Home Page",
    icon: <FaHome />,
  },
  {
    path: "/about",
    nameKey: "About us",
    icon: <BiCategory />,
  },
  {
    path: "/faqs",
    nameKey: "FAQs",
    icon: <FaRegHeart />,
  },
  {
    path: "/profil",
    nameKey: "Profile",
    icon: <IoPerson />,
  },
  {
    path: "/contact",
    nameKey: "Contact Us",
    icon: <TiShoppingCart />,
  },
  
];