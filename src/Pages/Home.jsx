import Header from "../Components/Header";
import Hero from "../Components/Home/Hero";
import Features from "../Components/Home/Features";

export default function Home() {


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
      </main>
    </>
  )
}