import Header from "../Components/Header";
import Hero from "../Components/Home/Hero";
import Features from "../Components/Home/Features";
import { useLandingReveal } from "../Utils/useLandingReveal";
import Steps from "../Components/Home/Steps";
import Footer from "../Components/Home/Footer";
import Benefits from "../Components/Home/Benefits";
import { useRef } from "react";

export default function Home() {
  const rootRef = useRef(null);

  useLandingReveal(rootRef);

  return (
    <>
      <div className="bg-aurora" aria-hidden="true">
        <span className="blob blob-violet" />
        <span className="blob blob-blue" />
      </div>
      <main className="home" ref={rootRef}>
        <Header />
        <Hero />
        <Features />
        <Steps />
        <Benefits />
        <Footer />
      </main>
    </>
  )
}