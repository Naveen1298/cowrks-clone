import React from "react";
import OfficeSpaceCss from "./OfficeSpace.module.css";

const OfficeSpace = () => {
  return (
    <div className={OfficeSpaceCss.container}>
      <div>
        <h2 className={OfficeSpaceCss.title}>Find an Office Space Near You</h2>
        <div className={OfficeSpaceCss.officeSpaces}>
          <div className={OfficeSpaceCss.buttonContainer}>
            <button className={OfficeSpaceCss.button}>
              Coworking space in Yelahanka
            </button>
          </div>
          <div className={OfficeSpaceCss.buttonContainer}>
            <button className={OfficeSpaceCss.button}>
              Coworking space in New Indiranagar
            </button>
          </div>
          <div className={OfficeSpaceCss.buttonContainer}>
            <button className={OfficeSpaceCss.button}>
              Coworking space in Ecoworld
            </button>
          </div>
          <div className={OfficeSpaceCss.buttonContainer}>
            <button className={OfficeSpaceCss.button}>
              Coworking space in Whitefield
            </button>
          </div>
          <div className={OfficeSpaceCss.buttonContainer}>
            <button className={OfficeSpaceCss.button}>
              Coworking space in Residency Road
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeSpace;
