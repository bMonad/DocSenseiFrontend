import Header from "../Components/Header";
import Hero from "../Components/Home/Hero";
import Features from "../Components/Home/Features";
import { useLandingReveal } from "../Utils/useLandingReveal";
import Steps from "../Components/Home/Steps";
import Footer from "../Components/Home/Footer";

export default function Home() {

  useLandingReveal();

  return (
    <>
      <div className="bg-aurora" aria-hidden="true">
        <span className="blob blob-violet" />
        <span className="blob blob-blue" />
      </div>
      <main className="home">
        <Header />
        <Hero />
        <Features />
        <Steps />
        <Footer />
      </main>
    </>
  )
}