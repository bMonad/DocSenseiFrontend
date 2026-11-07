import HomeIcons from './Home/HomeIcons'
import Brand from './Brand'
import { LINKS } from '../Constants/UIConstants'

export default function Header() {
  return (
    <header className='home-nav'>
      <a className='home-brand' href="#" aria-label='DocSensei Home'>
        <Brand />
      </a>
      <nav className='home-links' aria-label='Main Navigation'>
        {LINKS.map((link) => (
          <a key={link.id} href={`#${link.id}`}>
            {link.label}
          </a>
        ))}
      </nav>

      <button type='button' className='home-nav-cta'>
        <HomeIcons name="upload" size={16} />
        Upload PDF
      </button>
    </header>
  )
}