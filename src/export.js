import building from "./assets/building.svg";
import construction from "./assets/construction.svg";
import design from "./assets/design.svg";
import document from "./assets/document.svg";
import paint from "./assets/paint.svg";
import support from "./assets/support.svg";
import home from "./assets/home.png";
import window from "./assets/window.png";
import management from "./assets/management.png";
import sink from "./assets/sink.png";
import extensions from "./assets/extensions.png";
import reinforced from "./assets/reinforced.png";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "./assets/client1.png";
import client2 from "./assets/client2.png";
import client3 from "./assets/client3.png";

export const allservices = [
  {
    icon: home,
    title: "New Builds",

  },
  {
    icon: window,
    title: "Windows & Doors Installation",

  },
  {
    icon: reinforced,
    title: "Structural Work icnluding Foundations, load bearing walls and slabs",
    
  },
  {
    icon: sink,
    title: "Kitchen & bathrooms",

  },
  {
    icon: paint,
    title: "Renovations & Remodels",
  
  },
  {
    icon: extensions,
    title: "Additions & Extensions",
    
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "1.Make Contact",
    about:
      "Get in touch by phone, email or through the contact form below and tell us about your project. We’ll get back to you to arrange a time to talk.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "2.Consultation Meeting",
    about:
      "We meet at your property to see the space, take measurements and talk through what you want done, your budget and your timeline.",
  },
  {
    icon: FaRegBuilding,
    title: "3.Bill Of Quantities",
    about:
      "We list every material and every task the job needs, with the quantities and costs next to each one, so nothing is left to guesswork.",
  },
  {
    icon: FaSitemap,
    title: "4.Your Quote In writing",
    about:
      "A written quote with the full price and the work it covers, so you know exactly where you stand before you decide.",
  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "An experienced constructor known for meticulous planning and project management, ensuring every construction project meets quality standards and deadlines.",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "A visionary architect who blends modern design with sustainable practices to create innovative, environmentally friendly buildings.",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "A skilled builder with a strong focus on craftsmanship and attention to detail, dedicated to bringing architectural designs to life with precision.",
    post: "Builder",
  },
];