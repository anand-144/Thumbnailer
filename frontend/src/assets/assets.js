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
    userId: "6942b3bd2a93a220baa331b3",
    title: "Top smartwatch under 1499",
    style: "Bold & Graphic",
    aspect_ratio: "16:9",
    color_scheme: "vibrant",
    text_overlay: true,
    image_url: thumb_1,
    prompt_used: "add multiple smartwatches",
    user_prompt: "add multiple smartwatches",
    isGenerating: false,
    createdAt: "2025-12-19T09:50:43.727Z",
    updatedAt: "2025-12-19T09:51:07.874Z",
  },
  {
    _id: "69451d5bc9ea67e4c930f698",
    userId: "6942b3bd2a93a220baa331b3",
    title: "Learn How to make 100k in 10 days",
    style: "Bold & Graphic",
    aspect_ratio: "16:9",
    color_scheme: "vibrant",
    text_overlay: true,
    image_url: thumb_2,
    prompt_used: "add cash images graph and etc",
    user_prompt: "add cash images graph and etc",
    isGenerating: false,
    createdAt: "2025-12-19T09:39:39.971Z",
    updatedAt: "2025-12-19T09:40:05.084Z",
  },
  {
    _id: "6943fb409fa048268a04f105",
    userId: "6942b3bd2a93a220baa331b3",
    title: "Learn NextJS 16 with a Project",
    style: "Bold & Graphic",
    aspect_ratio: "16:9",
    color_scheme: "vibrant",
    text_overlay: true,
    image_url: thumb_3,
    prompt_used: "add human with laptop",
    user_prompt: "add human with laptop",
    isGenerating: false,
    createdAt: "2025-12-18T13:01:52.205Z",
    updatedAt: "2025-12-18T13:02:13.766Z",
  },
  {
    _id: "6943e8c763d3d5ec3e4f5c8c",
    userId: "6942b3bd2a93a220baa331b3",
    title: "Learn how to use Photoshop",
    style: "Bold & Graphic",
    aspect_ratio: "16:9",
    color_scheme: "vibrant",
    text_overlay: true,
    image_url: thumb_4,
    isGenerating: false,
    createdAt: "2025-12-18T11:43:03.281Z",
    updatedAt: "2025-12-18T11:43:24.982Z",
  },
  {
    _id: "6943e2220611d25b40e529b3",
    userId: "6942b3bd2a93a220baa331b3",
    title: "Make Burger in 30 min",
    style: "Photorealistic",
    aspect_ratio: "1:1",
    color_scheme: "vibrant",
    text_overlay: true,
    image_url: thumb_5,
    isGenerating: false,
    createdAt: "2025-12-18T11:14:42.466Z",
    updatedAt: "2025-12-18T11:15:04.260Z",
  },
];

// =========================
// HTML TEMPLATE
// =========================

export const yt_html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>YouTube - Clone</title>

    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              yt: '#0f0f0f',
              yt2: '#181818',
              ytBorder: '#303030',
            },
          },
        },
      };
    </script>

    <script src="https://unpkg.com/lucide@latest"></script>
  </head>

  <body class="dark bg-yt text-white font-sans">
    <!-- SAME HTML AS YOU PROVIDED -->
  </body>
</html>
`;
