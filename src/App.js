
import './App.css';
import RunningProject from './Component/RunningProject/RunningProject';
import OurAchivment from './Component/OurAchivment/OurAchivment';
import Footer from './Component/Footer/Footer';
import Plan from './Component/Plans/Plan';
import Contact from './Component/Contact/Contact';
import FlorenceAgency from './Component/FlorenceAgency/FlorenceAgency';
import WeDoSection from './Component/WeDoSection/WeDoSection';


function App() {
  return (
    <div>
      <FlorenceAgency></FlorenceAgency>
      <WeDoSection></WeDoSection>
      <RunningProject></RunningProject>
      <OurAchivment></OurAchivment>
      <Plan></Plan>
      <Contact></Contact>
      <Footer></Footer>
    </div>

  );
}

export default App;
