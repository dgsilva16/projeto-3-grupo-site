import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      
      <Header />

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      

      <Outlet />
      <Footer />
      
    </>
  );
}

export default App;