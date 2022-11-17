import { useState } from "react";
import bike from "./logos/projects/bike.png";
import bike_color from "./logos/projects/bike_color.png";
import food from "./logos/projects/food.png";
import food_color from "./logos/projects/food_color.png";
import shop from "./logos/projects/shop.png";
import shop_color from "./logos/projects/shop_color.png";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import HoverImage from "react-hover-image";
// import { KeyboardReturn } from "@mui/icons-material";

const projects = [
  {
    name: "Shopping_Application", 
    description:
      "An Shopping website for a buying items, built with MERN Stack. The products are fetched via an external API. The customers can rent products for some duration for any occasions like parties, marriage events, birthday functions, anniversaries etc. The site also has a lot of other great features like login/logout provided by auth, payment handling by Razorpay.",
    pic: shop,
    color_pic: shop_color,
    live_demo: "https://super-baklava-efcbeb.netlify.app/",
    source_code:
      "https://github.com/NithiAnbu97/Shopping_Front",
  },
  {
    name: "Recipe App",
    description:
      "I have created this project for the Recipes. So basically this is a website which uses different data like different food variety in India. We have used MERN stack to make this project.",
    pic: food,
    color_pic: food_color,
    live_demo: "https://nimble-sfogliatella-cd2023.netlify.app/",
    source_code:
      "https://github.com/NithiAnbu97/Recipe-_Front",
  },
  // {
  //   name: "Video-Chat-App",
  //   description:
  //     "I have created this project for live video chatting. I have created this project using MERN stack and socket.io.",
  //   pic: zoom,
  //   color_pic: zoom_color,
  //   live_demo: "https://radiant-starburst-a531b3.netlify.app/",
  //   source_code: "https://github.com/NithiAnbu97/Zoom_Front",
  // },
  {
    name: "Bike-Blog_App",
    description:
      "I have created this project for the Bikes. So basically this is a website which uses different data like different bike models in the world. We have used MERN stack to make this project.",
    pic: bike,
    color_pic: bike_color,
    live_demo: "https://sparkly-valkyrie-825348.netlify.app/",
    source_code: "https://github.com/NithiAnbu97/Bike_Blog_App_Front",
  },
  // {
  //   name: "Stack_Over_Flow-Clone",
  //   description:
  //     "A responsive stack overflow clone with all CRUD operations for questions, answers, and comments along with important features like searching, voting, and tags. We have used MERN stack to make this project.",
  //   pic: stackoverflow,
  //   color_pic: stackoverflow_color,
  //   live_demo: "https://stack-overflow-react.netlify.app/",
  //   source_code: "https://github.com/NithiAnbu97/Hack-2-Frontend",
  // },
  // {
  //   name: "URL_Shortener",
  //   description:
  //     "ShortURL is a url shortener to reduce a long link. Use our tool to shorten links and then share them, in addition you can monitor traffic statistics.  We have used MERN stack to make this project.",
  //   pic: url,
  //   color_pic: url_color,
  //   live_demo: "https://sunny-melba-34f0c9.netlify.app/",
  //   source_code: "https://github.com/NithiAnbu97/URL_Shortner_Front",
  // },
];

export function Projects() {
  const [projectPic, setProjectPic] = useState(true);
  console.log(projectPic);
  console.log(setProjectPic);
  return (
    <div className="projects-container">
      <div className="projects-heading">
        <h1>My Works</h1>
      </div>
      <div className="project-cards">
        {projects.map(
          (
            { name, description, pic, color_pic, live_demo, source_code },
            index
          ) => {
            if (index === 1) {
              return (
                <Leftproject
                  name={name}
                  description={description}
                  pic={pic}
                  color_pic={color_pic}
                  live_demo={live_demo}
                  source_code={source_code}
                />
              );      
            } else
              return (
                <Rightproject
                  name={name}
                  description={description}
                  pic={pic}
                  color_pic={color_pic}
                  live_demo={live_demo}
                  source_code={source_code}
                />
              );
          }
        )}
      </div>
    </div>
  );
}

function Rightproject({
  name,
  description,
  pic,
  color_pic,
  live_demo,
  source_code,
}) {
  console.log(pic);
  return (
    <div id="parent1">
      <HoverImage className="project-pic" src={color_pic} hoverSrc={pic} />
      <div id="child1">
        <h3 className="project-title">{name}</h3>
        <p className="project-content">{description}</p>
        <br />
        <div className="code-buttons">
          <Button color="inherit" onClick={() => window.open(live_demo)}>
            <span style={{ textDecoration: "underline" }}>Live Demo </span>
          </Button>
          <Button color="inherit" onClick={() => window.open(source_code)}>
            <GitHubIcon color="inherit" style={{ padding: "10px" }} /> Source
            code
          </Button>
        </div>
      </div>
    </div>
  );
}

function Leftproject({
  name,
  description,
  pic,
  color_pic,
  live_demo,
  source_code,
}) {
  return (
    <div id="parent2">
      <HoverImage className="project-pic" src={color_pic} hoverSrc={pic} />
      <div id="child2">
        <h3 className="project-title">{name}</h3>
        <p className="project-content">{description}</p>
        <br />
        <div className="code-buttons">
          <Button color="inherit" onClick={() => window.open(live_demo)}>
            <span style={{ textDecoration: "underline" }}>Live Demo </span>
          </Button>
          <Button color="inherit" onClick={() => window.open(source_code)}>
            <GitHubIcon color="inherit" style={{ padding: "10px" }} /> Source
            code
          </Button>
        </div>
      </div>
    </div>
  );
}
