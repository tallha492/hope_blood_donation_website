import DonateFormModal from "./components/DonateFormModal";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <DonateFormModal visible={true} />
      <Footer />
    </>
  );
}

export default App;
