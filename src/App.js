import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Enquire from "./components/Enquire/Enquire";
import Workspace from "./components/Workspace/Workspace";
import Ammenities from "./components/Ammenities/Ammenities";
import OfficeSpace from "./components/OfficeSpace/OfficeSpace";
import FormComponent from "./components/Form/FormComponent";
import Faq from "./components/FAQ/Faq";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Enquire />
      <Workspace />
      <Ammenities />
      <OfficeSpace />
      <FormComponent />
      <Faq />
    </div>
  );
}

export default App;
