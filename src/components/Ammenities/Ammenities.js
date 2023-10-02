import React from "react";
import AmmenitiesCss from "./Ammenities.module.css";
import Access from "../../assets/ammenities/24x7.png";
import Coffee from "../../assets/ammenities/Coffee.png";
import Internet from "../../assets/ammenities/Internet.png";
import OfficeSupplies from "../../assets/ammenities/OfficeSupplies.png";
import CommunityExperience from "../../assets/ammenities/CommunityExperience.png";
import ExclusiveEvents from "../../assets/ammenities/ExclusiveEvents.png";
import COWRKSConnectApplication from "../../assets/ammenities/COWRKSConnectApplication.png";

const Ammenities = () => {
  return (
    <div className={AmmenitiesCss.container}>
      <div>
        <h2 className={AmmenitiesCss.heading}>Premium Ammenities</h2>
        <p className={AmmenitiesCss.subHeading}>
          Enjoy a host of premium amenities aimed at enhancing your workspace
          experience
        </p>
        <div className={AmmenitiesCss.ammenitiesSection}>
          <div className={AmmenitiesCss.ammenity}>
            <div>
              <img className={AmmenitiesCss.image} src={Access} alt="24x7" />
            </div>
            <p className={AmmenitiesCss.title}>24 x 7</p>
          </div>
          <div className={AmmenitiesCss.ammenity}>
            <div>
              <img className={AmmenitiesCss.image} src={Coffee} alt="24x7" />
            </div>
            <p className={AmmenitiesCss.title}>Gourmet Beverages</p>
          </div>
          <div className={AmmenitiesCss.ammenity}>
            <div>
              <img className={AmmenitiesCss.image} src={Internet} alt="24x7" />
            </div>
            <p className={AmmenitiesCss.title}>Uninterrupted Internet</p>
          </div>
          <div className={AmmenitiesCss.ammenity}>
            <div>
              <img
                className={AmmenitiesCss.image}
                src={OfficeSupplies}
                alt="24x7"
              />
            </div>
            <p className={AmmenitiesCss.title}>Office Supplies</p>
          </div>
          <div className={AmmenitiesCss.ammenity}>
            <div>
              <img
                className={AmmenitiesCss.image}
                src={CommunityExperience}
                alt="24x7"
              />
            </div>
            <p className={AmmenitiesCss.title}>Community Experience</p>
          </div>
          <div className={AmmenitiesCss.ammenity}>
            <div>
              <img
                className={AmmenitiesCss.image}
                src={ExclusiveEvents}
                alt="24x7"
              />
            </div>
            <p className={AmmenitiesCss.title}>Exclusive Events</p>
          </div>
          <div className={AmmenitiesCss.ammenity}>
            <div>
              <img
                className={AmmenitiesCss.image}
                src={COWRKSConnectApplication}
                alt="24x7"
              />
            </div>
            <p className={AmmenitiesCss.title}>COWRKS Connect App</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ammenities;
