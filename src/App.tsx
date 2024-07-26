import CTASection from "./components/CTASection";
import Description from "./components/Description";
import Faq from "./components/Faq";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Presentation from "./components/Presentation";
import Pricing from "./components/Pricing";
import Problem from "./components/Problem";
import { Solution } from "./components/Solution";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Description />
      <Pricing />
      <Feedback />
      <Faq />
      <CTASection />
      <Presentation />
      <Footer />
    </>
  );
}

export default App;
