import Accordion from "react-bootstrap/Accordion";
import FaqCss from "./Faq.module.css";
import { HiPlus } from "react-icons/hi2";

function Faq() {
  return (
    <div className={FaqCss.container}>
      <div className={FaqCss.heading}>FAQ's</div>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <HiPlus />
            What are coworking spaces and how do I sign up with COWRKS?
          </Accordion.Header>
          <Accordion.Body>
            Coworking spaces are shared workspaces that allow individuals and
            businesses to work in a flexible office environment. These spaces
            offer ready-to-move-in offices, semi-customised offices, lounge
            membership, meeting rooms, and workspaces for a day or longer term.
            These office spaces are a great solution for those who need
            temporary workspaces or those who prefer hybrid working.
          </Accordion.Body>
          <Accordion.Body>
            To sign up for a coworking space with COWRKS, you can explore our
            workspace solutions available on our website. Once you find a
            workspace solution which suits your business needs, you can either
            instantly book a workspace or get in touch with our workspace
            experts to sign up.
          </Accordion.Body>

          <Accordion.Body>
            Bookable workspace solutions are workspace available on-demand and
            include day passes and day pass bundles for short-term requirements.
            Long-term flexible offices include flexible and dedicated desks
            (also known as hot desks), private studios, and semi-customised
            offices with flexible contracting terms. COWRKS also offers
            enterprise solutions for businesses looking to custom-build their
            workspaces and outsource workspace operations.
          </Accordion.Body>
          <Accordion.Body>
            Whether you're a freelancer, entrepreneur, or part of a larger team,
            coworking spaces offer a cost-effective solution for office space.
            At COWRKS, we work with individuals and global businesses to provide
            a wide range of office solutions.
          </Accordion.Body>
        </Accordion.Item>
        <div className={FaqCss.separator}></div>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <HiPlus />
            Where are COWRKS office spaces located in India?
          </Accordion.Header>
          <Accordion.Body>
            COWRKS, a Brookfield Properties company is one of the leading
            providers of office spaces in India, offering a wide range of
            coworking spaces, flexible offices, and customised offices or
            managed offices. COWRKS has an extensive portfolio of 20+ office
            spaces in India spread across 1.1 mSqFt of Grade-A commercial real
            estate. COWRKS office spaces are located across all Tier 1 cities in
            India and are located in prime locations in Bengaluru, Delhi, Mumbai
            Gurgaon, Noida, Hyderabad, Chennai &amp; Pune.
          </Accordion.Body>
        </Accordion.Item>
        <div className={FaqCss.separator}></div>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <HiPlus />
            What workspace solutions does COWRKS offer?
          </Accordion.Header>
          <Accordion.Body>
            COWRKS is an experiential workspace solution provider that offers a
            wide range of office solutions for individuals and businesses.
            COWRKS portfolio of workspace solutions includes flexible offices,
            lounge memberships, managed offices and instant office solutions.
          </Accordion.Body>
          <Accordion.Body>Flexible Offices</Accordion.Body>
          <Accordion.Body>
            COWRKS flexible offices are enterprise solutions aimed at providing
            businesses of all sizes with ready-to-move-in and semi-customised
            workspaces to run with ease and efficiency. With benefits such as
            quick turnaround, flexible contracting, access to premium amenities
            such as gourmet coffee and tea, fruit-infused water and
            state-of-the-art technology, these plug-and-play offices allow
            businesses to set up and start operations quickly while providing
            them with the flexibility to expand their physical presence as they
            grow. At COWRKS, we work with global enterprises to help set up and
            grow their business presence across India.
          </Accordion.Body>
          <Accordion.Body>Lounge Memberships</Accordion.Body>
          <Accordion.Body>
            Aimed at providing individuals such as freelancers and entrepreneurs
            with flexible workspaces, lounge memberships include flexible and
            dedicated desks, also known as hot desks. Individuals who need the
            flexibility of monthly contracts with pay-as-you-go facilities can
            benefit by setting up their office space with the COWRKS lounge
            membership.
          </Accordion.Body>
          <Accordion.Body>Managed Offices</Accordion.Body>
          <Accordion.Body>
            Managed offices, more commonly known as customised offices provide
            enterprises with a platform to design and build their workspace to
            resonate with their brand’s identity and values. These full-service
            office spaces allow businesses to focus on running their business
            while COWRKS workspace experts take care of everything from
            designing and building to even operating the office. Through a
            consolidated one-source fee, At COWRKS, we work with large global
            enterprises to them up to 25% against traditional lease contracts.
            We work with marketers, real estate experts and other key
            decision-makers across businesses to design and build a workspace
            that truly resonates with a brand’s ethos.
          </Accordion.Body>
        </Accordion.Item>
        <div className={FaqCss.separator}></div>
      </Accordion>
    </div>
  );
}

export default Faq;
