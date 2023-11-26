import './App.css';
import Application from './components/Application/application.component';
import Banner from './components/Banner/banner.component';
import Benefits from './components/Benefits/benefits.component';
import Footer from './components/Footer/footer.component';
import Form from './components/Form/form.component';
import Header from './components/Header/header.component';
import OurPartners from './components/OurPartners/ourpartners.component';
import Reviews from './components/Reviews/reviews.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <OurPartners />
      <Benefits />
      <Reviews />
      <Application />
      <Footer />
    </div>
  );
}

export default App;
