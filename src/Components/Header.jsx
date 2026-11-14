import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HomeIcons from './Home/HomeIcons'
import Brand from './Brand'
import { LINKS } from '../Constants/UIConstants'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 8);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const handleSectionClick = (event, id) => {
    event.preventDefault();
    navigate(`/#${id}`);
  };

  return (
    <header className={`home-nav${isScrolled ? " home-nav--scrolled" : ""}`}>
      <Link
        className='home-brand'
        to="/"
        aria-label='DocSensei Home'
      >
        <Brand />
      </Link>
      {pathname === "/" && (
        <nav className='home-links' aria-label='Main Navigation'>
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              onClick={(event) => handleSectionClick(event, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}

      <button type='button' className='home-nav-cta' onClick={() => navigate("/upload")}>
        <HomeIcons name="upload" size={16} />
        Upload PDF
      </button>
    </header>
  )
}