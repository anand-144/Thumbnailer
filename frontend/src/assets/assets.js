// =========================
// IMAGE IMPORTS
// =========================

import logo from "./logo.svg";
import footerlogo from "./footer-logo.svg";

import heroImg from "./hero-img.png";

import features1 from "./features-showcase-1.png"
import features2 from "./features-showcase-2.png"

import thumb_1 from "./thumb_1.jpg";
import thumb_2 from "./thumb_2.jpg";
import thumb_3 from "./thumb_3.jpg";
import thumb_4 from "./thumb_4.jpg";
import thumb_5 from "./thumb_5.jpg";

// =========================
// CONSTANTS
// =========================

export const aspectRatios = ["16:9", "1:1", "9:16"];

export const thumbnailStyles = [
  "Bold & Graphic",
  "Minimalist",
  "Photorealistic",
  "Illustrated",
  "Tech/Futuristic",
];

// =========================
// COLOR SCHEMES
// =========================

export const colorSchemes = [
  {
    id: "vibrant",
    name: "Vibrant",
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"],
  },
  {
    id: "sunset",
    name: "Sunset",
    colors: ["#FF8C42", "#FF3C38", "#A23B72"],
  },
  {
    id: "ocean",
    name: "Ocean",
    colors: ["#0077B6", "#00B4D8", "#90E0EF"],
  },
  {
    id: "forest",
    name: "Forest",
    colors: ["#2D6A4F", "#40916C", "#95D5B2"],
  },
  {
    id: "purple",
    name: "Purple Dream",
    colors: ["#7B2CBF", "#9D4EDD", "#C77DFF"],
  },
  {
    id: "monochrome",
    name: "Monochrome",
    colors: ["#212529", "#495057", "#ADB5BD"],
  },
  {
    id: "neon",
    name: "Neon",
    colors: ["#FF00FF", "#00FFFF", "#FFFF00"],
  },
  {
    id: "pastel",
    name: "Pastel",
    colors: ["#FFB5A7", "#FCD5CE", "#F8EDEB"],
  },
];

// =========================
// DUMMY DATA
// =========================

export const dummyThumbnails = [
  {
    _id: "69451ff3c9ea67e4c930f6a6",
    title: "Top smartwatch under 1499",
    style: "Bold & Graphic",
    aspect_ratio: "16:9",
    color_scheme: "vibrant",
    image_url: thumb_1,
  },
  {
    _id: "69451d5bc9ea67e4c930f698",
    title: "Learn How to make 100k in 10 days",
    style: "Bold & Graphic",
    aspect_ratio: "16:9",
    color_scheme: "vibrant",
    image_url: thumb_2,
  },
  {
    _id: "6943fb409fa048268a04f105",
    title: "Learn NextJS 16 with a Project",
    style: "Bold & Graphic",
    aspect_ratio: "16:9",
    color_scheme: "vibrant",
    image_url: thumb_3,
  },
  {
    _id: "6943e8c763d3d5ec3e4f5c8c",
    title: "Learn how to use Photoshop",
    style: "Bold & Graphic",
    aspect_ratio: "16:9",
    color_scheme: "vibrant",
    image_url: thumb_4,
  },
  {
    _id: "6943e2220611d25b40e529b3",
    title: "Make Burger in 30 min",
    style: "Photorealistic",
    aspect_ratio: "1:1",
    color_scheme: "vibrant",
    image_url: thumb_5,
  },
];

// =========================
// EXPORTS
// =========================

export {
  logo,
  footerlogo,
  heroImg,
  features1,
  features2,
};
