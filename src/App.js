
import './App.css';
import RunningProject from './Component/RunningProject/RunningProject';
import OurAchivment from './Component/OurAchivment/OurAchivment';
import Footer from './Component/Footer/Footer';
import Plan from './Component/Plans/Plan';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <div>
      <RunningProject />
      <OurAchivment />
      <Plan/>
      <Contact></Contact>
      <Footer />
    </div>
  );
}

export default App;
