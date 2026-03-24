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
    title: "New Home Builds",
    about:
      "Backed by a NHBRC accreditation, and 13 years of experience to make sure it's built properly and on budget, from foundation to finish.",
  },
  {
    icon: window,
    title: "Windows & Doors",
    about:
      "Measured correctly. Fitted correctly. The kind of thing that should only need to be done once.",
  },
  {
    icon: reinforced,
    title: "Structural Work",
    about:
      "Foundations, load-bearing walls, slabs . All work that has to be right the first time. This is where experience and precision matter most.",
  },
  {
    icon: sink,
    title: "Kitchen & bathrooms",
    about:
      "The most used rooms in your home deserve proper workmanship. No rushed finishes, no cut corners, no surprise costs when the tiles are already on the wall.",
  },
  {
    icon: paint,
    title: "Renovations & Remodels",
    about:
      "Breathing new life into an existing home without the nightmare of spiralling costs. Every renovation is scoped, costed, and delivered as quoted.",
  },
  {
    icon: extensions,
    title: "Additions & Extensions",
    about:
      "Adding space to your home is a structural decision, not just a cosmetic one. I make sure it's done right and integrated properly, built to last, and priced before a single wall comes down",
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "1.Make Contact",
    about:
      "Detailed research and strategizing to establish project goals, requirements, and timelines for a successful outcome.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "2.Consultation Meeting",
    about:
      "Crafting user-centered designs, wireframes, and mockups to create a visually appealing and functional interface.",
  },
  {
    icon: FaRegBuilding,
    title: "3.Bill Of Quantities",
    about:
      "Developing the core functionalities and implementing features with clean, efficient code to bring the design to life.",
  },
  {
    icon: FaSitemap,
    title: "4.Your Qoute In writing",
    about:
      "Thorough testing, debugging, and deployment to ensure the project meets all specifications and functions seamlessly.",
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