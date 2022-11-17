import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function Contact() {
  return (
    <div className="contact-container">
      <div className="contactme-heading">
        <h1>We're right here! </h1>
      </div>
      <div className="contactme-body">
        <img
          className="pic" alt = "profile"
          src="https://qwesys.com/wp-content/uploads/2020/02/web-development.gif"
        />
        <div className="contactme-box">
          <p className="contactme-title">
          Looking forward to hear from you.
          </p>
          <div className="contactme-content">
            <p> Phone : 08042242799 </p>
            <p> Email : info@scketch.com</p>
            <p> Location : Scketch Digital Solutions, 
                            #775, 42 High Street, Suite - 2,
                            100 Feet Rd, HAL 2nd Stage, 
                            Indiranagar, Bengaluru, Karnataka 560038
</p>
            <p className="links" style={{ alignItems: "center" }}>
              <GitHubIcon
                variant="outlined"
                color="info"
                style={{ padding: "10px" }}
              />
              <span
                onClick={() => window.open(`https://github.com/NithiAnbu97`)}
                className="link"
              >
                Github
              </span>
            </p>
            <p className="links">
              <LinkedInIcon
                variant="outlined"
                color="info"
                style={{ padding: "10px" }}
              />
              <span
                onClick={() =>
                  window.open(
                    `https://www.linkedin.com/in/nithiyanantham-s-a-5785251b9/`
                  )
                }
                className="link"
              >
                LinkedIn
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export function Footer() {
  return (
    <div className="footer-container">
      <p>Copyright © 2022. All Rights Reserved.</p>
      <p>Created by Altumind</p>
    </div>
  );
}
