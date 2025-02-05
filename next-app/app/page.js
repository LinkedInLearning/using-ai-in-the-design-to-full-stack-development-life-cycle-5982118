import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main role="main" title="home" className="Home">
      <Nav />
      <Hero />
      <Body />
      <Footer />
    </main>
  );
}