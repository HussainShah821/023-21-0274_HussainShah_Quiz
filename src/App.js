import './App.css';
import MyNavbar from "./components/Navbar";
import { HeroSection } from './components/HeroSection';
import Header from './components/Header';
import Footer from './components/Footer';
import Statistics from "./components/Statistics";
import SecurityUpdate from "./components/SecurityUpdate";
function App() {
  return (
    <div >

        <MyNavbar />
        <Header />
        <HeroSection />
        <Statistics />
        <SecurityUpdate />
        <Footer />

    </div>
  );
}

export default App;
