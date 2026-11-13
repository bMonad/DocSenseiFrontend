import Hero from "../Components/Home/Hero";
import Features from "../Components/Home/Features";
import { useLandingReveal } from "../Utils/useLandingReveal";
import Steps from "../Components/Home/Steps";
import Benefits from "../Components/Home/Benefits";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/home.css';

export default function Home() {
  const navigate = useNavigate();
  const rootRef = useRef(null);

  useLandingReveal(rootRef);

  return (
    <main className="home" ref={rootRef}>
      <Hero onExplore={() => navigate("/upload")} />
      <Features />
      <Steps />
      <Benefits />
    </main>
  )
}