import Typical from "react-typical";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";

export function Homepage() {
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="name-container">
          <Typical steps={["Hi, It's Scketch"]} />
        </div>
        <p className="content-container">
          <span style={{ fontSize: "25px" }}> A Creative Studio that</span>
          <br /> <h1>Thinks Design </h1>
        </p>
        
        </div>
      </div>
    
  );
}
