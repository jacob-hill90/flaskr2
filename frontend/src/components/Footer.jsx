import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
} from "mdb-react-ui-kit";
import FooterButton from "./FooterButton";

function Footer() {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="bg-body-tertiary text-center text-lg-start">
      {/* Grid container */}
      <div className="container p-4">
        {/* Grid row */}
        <div className="row">
          {/* Grid column */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <div className="line-em">
              <i className="fas fa-fish fa-lg"></i>
              <h5 className="text-uppercase mt-2">&nbsp;Team Fishtories</h5>
            </div>
            <p>
              This was a collaborative project designed by members of Code
              Platoon’s Romeo Cohort completed late 2022. We built this site to
              serve as a showcase of our collective problem solving and design
              skills, as such the fishing data displayed is for demonstration
              purposes only. All of our team members are US military veterans or
              veteran spouses. If you have questions about this project or would
              like to collaborate on future projects, feel free to connect with
              us on Linkedin.
            </p>
          </div>
          {/* Grid column */}
          <MDBCol className="mb-4" size="6">
            <h6 className="text-uppercase fw-bold mb-4 text-lg-end build-team">
              Developers&nbsp;
              <i className="fas fa-code"></i>
            </h6>

            <FooterButton
              link={"https://www.linkedin.com/in/jacob-hill90/"}
              git={"https://github.com/jacob-hill90"}
              name={"Jacob Hill"}
            />
            <FooterButton
              link={"https://www.linkedin.com/in/mike-lambert-349646220/"}
              git={"https://github.com/saltydog1980"}
              name={"Mike Lambert"}
            />
            <FooterButton
              link={"https://www.linkedin.com/in/nathan-d-leathers/"}
              git={"https://github.com/nathan-d-leathers"}
              name={"Nathan Leathers"}
            />
            <FooterButton
              link={
                "https://www.linkedin.com/in/robert-puentes-garces-811077226/"
              }
              git={"https://github.com/robertuptc"}
              name={"Robert Puentes Garces"}
            />
            <FooterButton
              link={"https://www.linkedin.com/in/daniel-reither-swe/"}
              git={"https://github.com/dritter44"}
              name={"Daniel Reither"}
            />
          </MDBCol>
        </div>
        {/* Grid row */}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © {getCurrentYear()}
        <a className="text-body" href="https://mdbootstrap.com/">
          &nbsp;Fishtories
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
