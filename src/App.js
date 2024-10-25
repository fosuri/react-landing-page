import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header';
import StartScreen from './Components/StartScreen/StartScreen';
import Offer from './Components/Offer/Offer';
import Hr from './Components/Hr/Hr';
import WhySection from './Components/WhySection/WhySection';
import ReviewsSection from './Components/ReviewsSection/ReviewsSection';


function App() {
  return (
    <>
      <Header />
      <StartScreen />
      <Offer />
      <Hr />
      <WhySection />
      <Hr />
      <ReviewsSection />
      <Hr />
    </>
  );
}

export default App;