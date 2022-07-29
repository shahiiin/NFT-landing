import ScrollToTop from "./components/ScrollToTop";
import Signup from "./components/Signup";
import SuperRare from "./components/SuperRare";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Free from "./components/Free";
import Clients from "./components/Clients";
import Release from "./components/Release";
import Like from "./components/Like";
import Footer from "./components/Footer";
import './sass/index.scss'

function App() {
  return (
    <div className="app-container">
    <ScrollToTop/>
    <Navbar/>
    <Home/>
    <Free/>
    <Clients/>
    <SuperRare/>
    <Release/>
    <Like/>
    <Signup/>
    <Footer/>
    </div>
  );
}

export default App;
