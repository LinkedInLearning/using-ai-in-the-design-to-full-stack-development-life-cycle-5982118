import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="Home">
      <Nav />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}