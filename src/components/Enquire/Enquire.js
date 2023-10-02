import React from "react";
import enquireImg from "../../assets/enquire.jpg";
import EnquireCss from "./Enquire.module.css";

const Enquire = () => {
  return (
    <div className={EnquireCss.container}>
      <div className={EnquireCss.enquireSection}>
        <div>
          <h2 className={EnquireCss.title}>
            COWRKS Residency Road, Purva Premier
          </h2>
          <p>
            Explore our portfolio of flexible workspaces, managed offices and
            instant solutions to meet the needs of today's businesses
          </p>
          <p>
            Explore our portfolio of flexible workspaces, managed offices and
            instant solutions to meet the needs of today's businesses. Explore
            our portfolio of flexible workspaces, managed offices and instant
            solutions to meet the needs of today's businesses
          </p>
          <div>
            <div className={EnquireCss.enquireSection}>
              <div className={EnquireCss.details}>
                <h2>1600</h2>
                <h3>Desks</h3>
              </div>
              <div className={EnquireCss.line}></div>
              <div className={EnquireCss.details}>
                <h2>0.40L+</h2>
                <h3>SqFt</h3>
              </div>
            </div>
            <button
              onClick={() => {
                alert("You can Enquire Soon...");
              }}
              className={EnquireCss.button}
            >
              Enquire Now
            </button>
          </div>
        </div>

        <div>
          <div className={EnquireCss.enquireSection}>
            <div className={EnquireCss.separator}></div>
            <div>
              <img
                className={EnquireCss.enquireImg}
                src={enquireImg}
                alt="enquireImage"
              />
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                alert("Coming soon on Map...");
              }}
              className={EnquireCss.viewButton}
            >
              View on Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquire;
