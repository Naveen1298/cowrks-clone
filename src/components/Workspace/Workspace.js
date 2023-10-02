import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import flexibleOffices from "../../assets/workspace/flexibleOffices.jpg";
import managedOffice from "../../assets/workspace/managedOffice.jpeg";
import InstantSolutions from "../../assets/workspace/InstantSolutions.jpg";
import workspaceCss from "./Workspace.module.css";

const Workspace = () => {
  return (
    <div className={workspaceCss.container}>
      <div>
        <h2>Wokspace Solutions</h2>
        <p>
          Explore our portfolio of flexible workspaces, managed offices and
          instant solutions to meet the needs of today's businesses
        </p>
      </div>
      <div className={workspaceCss.cardSection}>
        <div className={workspaceCss.cardGroup}>
          <div className={workspaceCss.separator}></div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={flexibleOffices} />
              <Card.Body>
                <Card.Title className={workspaceCss.heading}>
                  Flexible Offices
                </Card.Title>
                <Card.Text className={workspaceCss.subHeading}>
                  Ready to move in, semi-customised workspaces built for
                  enterprises
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    alert("Coming Soon...");
                  }}
                >
                  Enquire Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className={workspaceCss.cardGroup}>
          <div className={workspaceCss.separator}></div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={managedOffice} />
              <Card.Body>
                <Card.Title className={workspaceCss.heading}>
                  Managed Offices
                </Card.Title>
                <Card.Text className={workspaceCss.subHeading}>
                  Premium custom built and operated workspaces
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    alert("Coming Soon...");
                  }}
                >
                  Enquire Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className={workspaceCss.cardGroup}>
          <div className={workspaceCss.separator}></div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={InstantSolutions} />
              <Card.Body>
                <Card.Title className={workspaceCss.heading}>
                  Instant Solutions
                </Card.Title>
                <Card.Text className={workspaceCss.subHeading}>
                  On demand premium workspaces with vibrant designs
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    alert("Coming Soon...");
                  }}
                >
                  Enquire Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* <div className={workspaceCss.cardSection}>
        <div>
          <div>
            <img src={flexibleOffices} alt="flexibleOffices" />
          </div>
          <div>
            <h3>Title</h3>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Workspace;
